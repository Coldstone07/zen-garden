#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

PORT = 8000
DIRECTORY = "."

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    # Change to the script's directory
    os.chdir(Path(__file__).parent)
    
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"\nKairos Development Server")
        print(f"Serving directory: {os.getcwd()}")
        print(f"Local server: http://localhost:{PORT}")
        print(f"Main page: http://localhost:{PORT}/index.html")
        print(f"Hook page: http://localhost:{PORT}/hook.html")
        print(f"\nPress Ctrl+C to stop the server\n")
        
        # Auto-open browser
        try:
            webbrowser.open(f'http://localhost:{PORT}/index.html')
        except:
            pass
            
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print(f"\nServer stopped")
            sys.exit(0)

if __name__ == "__main__":
    main()