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

Analyze Patterns
================
- node server.js
- node ostream.js (Make sure pattern.js is loadable)
- node istream.js

Add Patterns
============
- node add_pattern.js (User defined patterns)
	1. pattern.htm is the form that user fills
	2. code is generated on the web page
