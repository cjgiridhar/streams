Streams
=======
Analyzes streams for patterns

How it works
============
- istream.js creates a stream of numbers taking input from numbers.txt
- Stream is then published on /inChannel
- Server.js is a server that serves the requests on different channels
- ostream.js, that is subscribed on /inChannel, gets the numbers and stores them in a buffer (5 at a time)
- Patterns from pattern.js are then applied on the buffer
- Matched pattern is then published on /outChannel
- Supports user defined patterns

Design Considerations
=====================
- Two clients (istreams and ostream) are maintained and no server-side clients used. This keeps the server unblocked.
- At ostream, operations of, generating buffer from input stream and applying patterns on this buffer are handled async way.
- Above ensures:
	1. Work done at istream and ostream is independent of each other
	2. Scalability in terms of patterns can be better served

Usage
=====
1. node serve.js
2. node ostream.js (Make sure pattern.js is loadable)
3. node istream.js
4. node add_pattern.js (User defined patterns)
- pattern.htm is the form that user fills
- code is generated on the web page
