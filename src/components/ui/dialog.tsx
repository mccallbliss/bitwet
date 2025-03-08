
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

// Create a context to manage all open dialogs
const DialogContext = React.createContext<{
  closeAllExcept: (id: string) => void;
  registerDialog: (id: string, close: () => void) => void;
  unregisterDialog: (id: string) => void;
}>({
  closeAllExcept: () => {},
  registerDialog: () => {},
  unregisterDialog: () => {},
})

// Provider to track all open dialogs
export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [dialogs, setDialogs] = React.useState<Map<string, () => void>>(new Map())

  const registerDialog = React.useCallback((id: string, close: () => void) => {
    setDialogs(prev => {
      const newMap = new Map(prev)
      newMap.set(id, close)
      return newMap
    })
  }, [])

  const unregisterDialog = React.useCallback((id: string) => {
    setDialogs(prev => {
      const newMap = new Map(prev)
      newMap.delete(id)
      return newMap
    })
  }, [])

  const closeAllExcept = React.useCallback((id: string) => {
    dialogs.forEach((close, dialogId) => {
      if (dialogId !== id) {
        close()
      }
    })
  }, [dialogs])

  return (
    <DialogContext.Provider value={{ closeAllExcept, registerDialog, unregisterDialog }}>
      {children}
    </DialogContext.Provider>
  )
}

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const dialogId = React.useId()
  const { closeAllExcept, registerDialog, unregisterDialog } = React.useContext(DialogContext)
  const closeRef = React.useRef<() => void>()
  
  // Register this dialog when it mounts
  React.useEffect(() => {
    const closeFunc = () => {
      const closeEvent = new CustomEvent('dialog-close-requested', { detail: { id: dialogId } })
      document.dispatchEvent(closeEvent)
    }
    
    closeRef.current = closeFunc
    registerDialog(dialogId, closeFunc)
    
    return () => {
      unregisterDialog(dialogId)
    }
  }, [dialogId, registerDialog, unregisterDialog])
  
  // Close all other dialogs when this one opens
  React.useEffect(() => {
    const onOpenChange = () => {
      closeAllExcept(dialogId)
    }
    
    // Using a timeout to ensure this runs after the dialog is fully opened
    const timer = setTimeout(onOpenChange, 0)
    return () => clearTimeout(timer)
  }, [dialogId, closeAllExcept])
  
  // Handle close events
  React.useEffect(() => {
    const handleCloseRequest = (e: CustomEvent) => {
      if (e.detail.id !== dialogId) {
        return
      }
      
      // Find and trigger the close button if possible
      const closeButton = document.querySelector(`[data-dialog-id="${dialogId}"] [data-radix-collection-item]`) as HTMLButtonElement | null
      if (closeButton) {
        closeButton.click()
      }
    }
    
    document.addEventListener('dialog-close-requested' as any, handleCloseRequest as any)
    return () => {
      document.removeEventListener('dialog-close-requested' as any, handleCloseRequest as any)
    }
  }, [dialogId])

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        data-dialog-id={dialogId}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        {...props}
      >
        {children}
        {!props.hasOwnProperty('noCloseButton') && (
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogProvider,
}
