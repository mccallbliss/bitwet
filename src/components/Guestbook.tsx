
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

const initialEntries: GuestbookEntry[] = [
  {
    id: 1,
    name: "XxEmOQuEeN2003xX",
    message: "OMG I can't wait for the tour!!! You guys are literally my favorite band ever!!! <3 <3 <3",
    timestamp: "05/05/2025"
  },
  {
    id: 2,
    name: "sk8erboi_4ever",
    message: "Just got my tickets for the Chicago show!! Who else is going?? Let's meet up!!",
    timestamp: "05/05/2025"
  },
  {
    id: 3,
    name: "sparkle_princess",
    message: "I've been a fan since your first album!!! Can't believe I'm finally going to see you live! XOXO",
    timestamp: "05/05/2025"
  }
];

const Guestbook: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name.trim() === "" || message.trim() === "") {
      toast.error("Please fill out all fields!");
      return;
    }
    
    const newEntry: GuestbookEntry = {
      id: entries.length + 1,
      name,
      message,
      timestamp: new Date().toLocaleDateString()
    };
    
    setEntries([newEntry, ...entries]);
    setName("");
    setMessage("");
    
    toast.success("Thanks for signing our guestbook!");
  };

  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <div className="w-3 h-3 bg-y2k-blue rounded-full animate-sparkle mr-2" />
        <h2 className="text-3xl font-bold text-y2k-purple inline-block">Guestbook</h2>
        <div className="w-3 h-3 bg-y2k-blue rounded-full animate-sparkle ml-2" />
      </div>
      
      <div className="y2k-border bg-white p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4 text-y2k-hotPink">Sign our guestbook!</h3>
        
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-y2k-purple">
              Your Name:
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-y2k-purple rounded-md"
              placeholder="Enter your name or nickname"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-bold text-y2k-purple">
              Message:
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-2 border-y2k-purple rounded-md"
              placeholder="Share your thoughts!"
              rows={4}
            />
          </div>
          
          <button type="submit" className="y2k-button">
            <span className="rainbow-text">♡</span> Submit <span className="rainbow-text">♡</span>
          </button>
        </form>
        
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-y2k-hotPink">Recent Messages:</h3>
          
          <div className="space-y-4">
            {entries.map((entry) => (
              <div key={entry.id} className="guestbook-entry">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-y2k-purple">{entry.name}</h4>
                  <span className="text-xs text-gray-500">{entry.timestamp}</span>
                </div>
                <p className="text-gray-700">{entry.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
