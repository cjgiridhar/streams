Streams
=======
Analyzes streams for patterns

How it works
============
- istream.js creates a stream of numbers taking input from numbers.txt
- Stream is then published on /inChannel
- Serve.js is a server that serves the requests on different channels
- ostream.js, that is subscribed on /inChannel, gets the numbers and stores them in a buffer (5 at a time)
- Patterns from pattern.js are then applied on the buffer
- Matched pattern is then published on /outChannel

Usage
=====
1. node serve.js
2. node ostream.js (Make sure pattern.js is loadable)
3. node istream.js
