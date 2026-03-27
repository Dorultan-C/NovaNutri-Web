export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface border-t border-muted/10 pt-16 pb-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Community Section */}
        <div className="flex flex-col items-center text-center mb-12 w-full">
          <h3 className="text-2xl font-bold text-heading mb-3 tracking-tight">Join the Community</h3>
          <p className="text-body mb-8 max-w-md">
            Follow us for budget-friendly recipe hacks, app updates, and behind-the-scenes building.
          </p>
          
          {/* Social Icons Container */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            
            {/* 1. Instagram */}
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted/5 flex items-center justify-center text-muted hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* 2. YouTube */}
            <a 
              href="https://youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted/5 flex items-center justify-center text-muted hover:text-[#FF0000] hover:bg-[#FF0000]/10 hover:scale-110 transition-all duration-300"
              aria-label="YouTube"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>

            {/* 3. X (Twitter) */}
            <a 
              href="https://x.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted/5 flex items-center justify-center text-muted hover:text-black hover:bg-black/5 hover:scale-110 transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            {/* 4. Threads */}
            <a 
              href="https://threads.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted/5 flex items-center justify-center text-muted hover:text-black hover:bg-black/5 hover:scale-110 transition-all duration-300"
              aria-label="Threads"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.846 12.392c.038.56-.093 1.344-.61 1.838-.413.393-.974.568-1.574.568-.846 0-1.554-.45-1.748-1.22-.055-.224-.075-.487-.075-.758 0-.916.326-1.58.983-2.022.418-.28 1.054-.42 1.588-.344.912.13 1.36.757 1.436 1.938ZM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm5.405 13.064c-.114 1.146-.64 2.148-1.465 2.812-.862.695-2.016 1.05-3.328 1.05-1.56 0-2.822-.497-3.64-1.433-.872-1.002-1.328-2.5-1.328-4.333 0-1.787.48-3.268 1.388-4.275.875-.97 2.115-1.474 3.585-1.474 1.42 0 2.597.468 3.4 1.353.864.954 1.256 2.457 1.135 4.346h-6.22c.074 1.037.387 1.768.908 2.115.342.228.847.336 1.346.336.852 0 1.49-.336 1.874-.985.045-.078.106-.118.172-.118h1.868c.08 0 .144.076.126.152-.092.412-.34 1.005-.82 1.454Z" />
              </svg>
            </a>

            {/* 5. Facebook */}
            <a 
              href="https://facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted/5 flex items-center justify-center text-muted hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:scale-110 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-muted/10">
          <p className="text-sm font-bold text-heading mb-4 md:mb-0">NovaNutri</p>
          <p className="text-sm text-muted text-center">
            &copy; {currentYear} NovaNutri. All rights reserved.
          </p>
          <div className="hidden md:block w-20"></div> {/* Spacer to keep copyright centered */}
        </div>

      </div>
    </footer>
  );
}