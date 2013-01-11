Streams
=======
Analyzes streams for patterns

How it works
============
- istream.js creates a stream of numbers taking input from numbers.txt
- Stream is then published on /inChannel
- Server.js is a server that serves the requests on different channels
- ostream.js, that is subscribed on /inChannel, gets the numbers and stores them in a buffer (5 at a time)
- Patterns from node_modules/pattern.js are then applied on the buffer, Analysis is sent to ostream.js
- Matched pattern is then published on /outChannel by ostream.js


Analyze Patterns
================

- node server.js (Run the server)
- node ostream.js (Start the ostream client)
- node istream.js (Start the istream client)

Define User Patterns
============

- node add_pattern.js
	1. pattern.html is the form that user fills
	2. code is generated and rendered on the web page
