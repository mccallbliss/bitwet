
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 mt-8 relative">
      <div className="star absolute top-5 left-[25%]" />
      <div className="heart absolute top-3 right-[20%]" />
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="marquee-container mb-4 bg-y2k-blue text-white py-2 y2k-border">
          <p className="marquee-text text-lg font-bold">
            ✧･ﾟ: DON'T FORGET TO ADD US ON MYSPACE! ✧･ﾟ: FOLLOW OUR LIVEJOURNAL FOR TOUR UPDATES! ✧･ﾟ:
          </p>
        </div>
        
        <div className="y2k-border bg-white p-4 rounded-lg mb-4">
          <p className="text-y2k-purple font-bold mb-3">Connect with us:</p>
          
          <div className="flex justify-center space-x-4">
            <button className="y2k-button bg-y2k-blue">MySpace</button>
            <button className="y2k-button bg-y2k-purple">AIM</button>
            <button className="y2k-button">MSN</button>
          </div>
        </div>
        
        <div className="text-sm text-y2k-purple mt-6">
          <p>© 2003 Nostalgia Band. All rights reserved.</p>
          <p className="mt-1">This site looks best in Internet Explorer 6.0 at 800x600 resolution</p>
          <div className="flex justify-center mt-2">
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVElEQVR4nO2Zy09TQRTGf0UoILAwoBAXPuKGR9i4MMbEGHckLvgHWLkwRndq3LMggQQQWbEwRHEDCbpRlKgg7iguCFEhUGl5tKVpS8vHnJt7LdzH9N50blM1X3LS3M6Z+b47Z86ZmQuVVFKJO+UCLcBTYBjoA96r31mgQ42ZUO+GgG6gE9gD5CVNvhC4AIwAixHGLwBDwHkgL1nyheoL+xLYMJnoR/W+DbYBfhLIH8BZIG7XMm2PJ4Ybb9SuXUB2LOVzgLvAeszkf9en9nqAqzYxk0FQ3k32AZdjJF+rlhCf5vwA3ACKA2LrgBYluGZwTQGXdCI/CrQ7lDoKBLtU3KKanyruo2qLEHgKBAfcxNyJSL5ePRmf5nwPHN2ifR3aqthTydbLaoAsJ3/dCprkl4AWoAAhygX61FxfVdtugfuYovIFaNzmxPe3SMtG7BfRok/12ZHvdiq/h8l/AfiisZiUTQEuaG7ESSdJ71VEQt8Db0OIOR6lfHjW6QSDK8xP2vI/VLe78CiXtxhzGdiXbK9TGU3JDQtJLkdvmTQ5lfF3lOSl6FMCuR8h+SUdyUxLSIUYF8BKBuQXVJvuqtpNJMOcZEa+i+g1pQybBG65yZRkTvJfyPcTQzKjlLmcpUQ5apG6AudRkhmn5IOIPJjMO2CZMr3yx78uluRGpuSDCJwvQHsGHSrbQWYUMQvAD8Z2BvJzjHVsYRrHGF/VhNckZ0GZjGlLlS64GOcmP2IsaJkMFvCeOardiJljaFLiELIKo2VGXFk26sVoGSSPjH3erJdUmS/mwTF0AHgXQXy8qjuS/Kya80Y1D7KVbTGI8RnvtuJNZhGk9jkdl14M36ZktUluBXhuMlkkPbljmrVtyY4ylXSfbpILVZJ0QlJbZl+ohpBE6jWaexIvIbgS6dh6MkLuGPAvCRMuxUgdiQlWK4Qf0aEoQtXCNJ2hdrvoJTVMOUKN+5h+6Bw0NdBWjV6nNRVUKQRbZJdmTavjOoDfwvbzv4GJQtPuZVSjusUvTDwzJlyt5NRJYRuSYL2KcVwJ3n3VFkl+r4ojpxQbDSLKVWBtEhaXcJ1RSSQCqQd+CUxcwvVTxQ5d+ZFLH/A4SRsXbzKQjZ77FZpU8h+B0B3Wb6XT1AAAAABJRU5ErkJggg=="
              alt="Made on Windows 98"
              className="h-6 w-6 mx-1"
            />
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADnUlEQVR4nO2ZS2gTURSGv9qKD7TWFwouFEXc+FhIH+LKjYIIIrpRF4ILNy5duXHhqiAqiBtRQcSFG18IKqJUqmJtaxvbpjZNm6ZpkzRN5nFnJp2ZZDLHnJlcm0ln0iYzKcwPB8Lce+45/7n33HPOfVCgQIG4qASOAeeBDuuTB3QD7cBZ4ABQlss/OGiZeQYsAe+BJmA/UCozLAP2AM3AO2DBgukG6oDyXDkwJCNgBl4DrUCdyClvzr8T2AsMAnMWTAdwLBcODMmIl4EzwIoEZgHoABpc9lkJ1AO9FupMGHmO5ygYdOC2zVFvxMi7xZG9wB1gHJixgrnpcnndQkd3FwTjLvB3U3h/kNTxbY2PvRTaBYEGnrhQvpCBO8O9QCaXCvs+J1egkHEHLnGwkP6/YDZPCUQM+C9ysFuIvkxNgQaefkfTuRKYTeVgz+ISOH/sENcu1nP4wJ4szWEyUqb++xYlpeTchVZev/uZAZkOLOoJJNWaYFDP8Mh3jKbGulE+8PuMk+g+mYQSMJoXCE2XJZ3W4b4jmBYGUHx7Eq7Z4dSyQGg6yGBzTcLTZMQsiAOzyVCAgYFtMVb+YWhkfIsTW7/U6SHGrtcQnCgFIG33JKbvfwiFdmUkVFImtYOO3PEhFCrdbDQgZECvHU0rY/3zQVSqz6kSYw44s4JTNgXW1kTXxSPAr/cHWSw/ynItUHP2I8WlhtTfsiibWy1iVSVOOSPmL8JotOLXXcFgTK2gWlsWBFqTNmVv26Y5sDOTiXmgJGH9apZKMw4Io0T5xS0HFtXpzavKNjnQhxc4aB5JnL2ykjKpTRQlWAEUn3YhG9GmgXwkoDfY8XN3Mpk2EB4JrsuN8xrK71OIgj+8G3kYqsxF4M4kzPD58cM7MHzaivHnVnVnXhXn9xfpW6c8t2lwRr1w6Bc1gVRN9EqfScnypGjkU2nHyV2kA5njgD6d0ozDTFhC6TJPHGJGHPCn++KYu19yDrMRRFOJW3JCkDnMwrxQnnZjZhZDuMBhFuaF8qS0sZLYk7nS+1LDkTdgIvZMI0yiDrhyoJR46jLZvLQl0+XtLvhJXAM79w507kBhDmR5DixlOd0tQPd9oDOiE7PpuIiYY5cEZWQeYxwcjKm8xN3UGC3Mw3+vJKBhpMBxeRbLjO8GzLEOBm7cqUnSoS9Dhm5VHLkn26Nzs8j1OJL6BZgDRfkEv5BJAAAAAElFTkSuQmCC"
              alt="Best viewed at 800x600"
              className="h-6 w-6 mx-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
