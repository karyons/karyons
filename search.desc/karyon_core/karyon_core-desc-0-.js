searchState.loadedDescShard("karyon_core", 0, "A cross-compatible async runtime\nA set of async utilities.\nCollects common cryptographic tools\nRepresents karyon’s Core Error.\n<code>event::EventEmitter</code> implementation.\nA simple publish-subscribe system <code>Read More</code>\nA set of helper tools and functions.\nReturns a single-threaded global executor\nAn async executor.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a single-threaded global executor\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if there are no unfinished tasks.\nCreates a new executor.\nRuns the executor until the given future completes.\nSpawns a task onto the executor.\nSpawns many tasks onto the executor.\nRuns a single task.\nAttempts to run a task if at least one is scheduled.\nRead bytes asynchronously.\nExtension trait for <code>AsyncRead</code>.\nWrite bytes asynchronously.\nExtension trait for <code>AsyncWrite</code>.\nThe read half returned by <code>split()</code>.\nThe write half returned by <code>split()</code>.\nBoxes the reader and changes its type to …\nBoxes the writer and changes its type to …\nConverts this <code>AsyncRead</code> into a <code>Stream</code> of bytes.\nCreates an adapter which will chain this stream with …\nCloses the writer.\nFlushes the stream to ensure that all buffered contents …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAttempt to close the object.\nAttempt to flush the object, ensuring that any buffered …\nAttempt to read from the <code>AsyncRead</code> into <code>buf</code>.\nAttempt to read from the <code>AsyncRead</code> into <code>bufs</code> using vectored\nAttempt to write bytes from <code>buf</code> into the object.\nAttempt to write bytes from <code>bufs</code> into the object using …\nReads some bytes from the byte stream.\nReads the exact number of bytes required to fill <code>buf</code>.\nReads the entire contents and appends them to a <code>Vec</code>.\nReads the entire contents and appends them to a <code>String</code>.\nLike <code>read()</code>, except it reads into a slice of buffers.\nSplits a stream into <code>AsyncRead</code> and <code>AsyncWrite</code> halves.\nCreates an adapter which will read at most <code>limit</code> bytes …\nWrites some bytes into the byte stream.\nWrites an entire buffer into the byte stream.\nLike <code>write()</code>, except that it writes a slice of buffers.\nAn async mutex.\nA guard that releases the mutex when dropped.\nA memory location that can be written to at most once.\nAn async reader-writer lock.\nReturns the argument unchanged.\nCreate a new, initialized <code>OnceCell</code> from an existing value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a reference to the inner value, or <code>None</code> if the value …\nReturns a mutable reference to the underlying data.\nGet a mutable reference to the inner value, or <code>None</code> if the …\nReturns a mutable reference to the inner value.\nEither get the value or initialize it with the given …\nEither get the value or initialize it with the given …\nEither get the value or initialize it with the given …\nEither get the value or initialize it with the given …\nGet a reference to the inner value.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes the mutex, returning the underlying data.\nConvert this <code>OnceCell</code> into the inner value, if it is …\nUnwraps the lock and returns the inner value.\nTell whether or not the cell is initialized.\nAcquires the mutex.\nAcquires the mutex and clones a reference to it.\nAcquires the mutex and clones a reference to it using the …\nAcquires the mutex using the blocking strategy.\nCreates a new async mutex.\nCreate a new, uninitialized <code>OnceCell</code>.\nCreates a new reader-writer lock.\nAcquires a read lock.\nAcquires an owned, reference-counted read lock.\nAcquires an owned, reference-counted read lock.\nAcquires a read lock.\nTry to set the value of the cell.\nTry to set the value of the cell.\nReturns a reference to the mutex a guard came from.\nTake the value out of this <code>OnceCell</code>, moving it back to the …\nAttempts to acquire the mutex.\nAttempts to acquire the mutex and clone a reference to it.\nAttempts to acquire a read lock.\nAttempts to acquire an an owned, reference-counted read …\nAttempts to acquire a read lock with the possiblity to …\nAttempts to acquire an owned, reference-counted read lock …\nAttempts to acquire a write lock.\nAttempts to acquire an owned, reference-counted write lock.\nAcquires a read lock with the possiblity to upgrade to a …\nAcquires an owned, reference-counted read lock with the …\nAttempts to acquire an owned, reference-counted read lock …\nAttempts to acquire a read lock with the possiblity to …\nWait for the cell to be initialized, and then return a …\nWait for the cell to be initialized, and then return a …\nAcquires a write lock.\nAcquires an owned, reference-counted write lock.\nAcquires an owned, reference-counted write lock.\nAcquires a write lock.\nAn address associated with a Unix socket.\nA TCP server, listening for connections.\nA TCP connection.\nA UDP socket.\nA Unix server, listening for connections.\nAn address associated with a Unix socket.\nA Unix connection.\nAccepts a new incoming connection.\nAccepts a new incoming connection.\nReturns the contents of this address if it is a <code>pathname</code> …\nCreates a new <code>UnixListener</code> bound to the given path.\nCreates a new <code>TcpListener</code> bound to the given address.\nCreates a new <code>UdpSocket</code> bound to the given address.\nGets the value of the <code>SO_BROADCAST</code> option for this socket.\nCreates a Unix connection to given path.\nCreates a TCP connection to the specified address.\nConnects the UDP socket to an address.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a <code>SockAddr</code> with the family <code>AF_UNIX</code> and the …\nReturns a stream of incoming connections.\nReturns a stream of incoming connections.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the address is unnamed.\nExecutes an operation of the <code>IP_ADD_MEMBERSHIP</code> type.\nExecutes an operation of the <code>IPV6_ADD_MEMBERSHIP</code> type.\nExecutes an operation of the <code>IP_DROP_MEMBERSHIP</code> type.\nExecutes an operation of the <code>IPV6_DROP_MEMBERSHIP</code> type.\nReturns the local address this socket is connected to.\nReturns the local address this stream is bound to.\nReturns the local address this listener is bound to.\nReturns the local address this listener is bound to.\nReturns the local address this socket is bound to.\nGets the value of the <code>IP_MULTICAST_LOOP</code> option for this …\nGets the value of the <code>IPV6_MULTICAST_LOOP</code> option for this …\nGets the value of the <code>IP_MULTICAST_TTL</code> option for this …\nGets the value of the <code>TCP_NODELAY</code> option for this socket.\nCreates a pair of connected Unix sockets.\nReceives data without removing it from the queue.\nReceives a single datagram from the connected address …\nReceives a single datagram message without removing it …\nReturns the remote address this socket is connected to.\nReturns the remote address this stream is connected to.\nReturns the remote address this socket is connected to.\nReceives a single datagram message from the connected …\nReceives a single datagram message.\nSends data to the connected address.\nSends data to the given address.\nSets the value of the <code>SO_BROADCAST</code> option for this socket.\nSets the value of the <code>IP_MULTICAST_LOOP</code> option for this …\nSets the value of the <code>IPV6_MULTICAST_LOOP</code> option for this …\nSets the value of the <code>IP_MULTICAST_TTL</code> option for this …\nSets the value of the <code>TCP_NODELAY</code> option for this socket.\nSets the value of the <code>IP_TTL</code> option for this socket.\nSets the value of the <code>IP_TTL</code> option for this socket.\nSets the value of the <code>IP_TTL</code> option for this socket.\nShuts down the read half, write half, or both halves of …\nShuts down the read half, write half, or both halves of …\nGets the value of the <code>IP_TTL</code> option for this socket.\nGets the value of the <code>IP_TTL</code> option for this socket.\nGets the value of the <code>IP_TTL</code> option for this socket.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nExponential backoff …\nCondVar is an async version of …\nCondWait is a wrapper struct for CondVar with a Mutex …\nThe return value from the <code>select</code> function, indicating …\nTaskGroup A group that contains spawned tasks.\nThe result of a spawned task.\nThe base delay in milliseconds for the initial retry.\nThe CondVar\nThe max delay in milliseconds allowed for a retry.\nAtomic counter\nReturns the result of the future that completes first, …\nStop flag\nWaits for a future to complete or times out if it exceeds …\nBoolean flag\nExponential backoff …\nThe base delay in milliseconds for the initial retry.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe max delay in milliseconds allowed for a retry.\nCreates a new Backoff.\nReset the retry counter to 0.\nAtomic counter\nSleep based on the current retry count and delay values. …\nStop flag\nCondVar is an async version of …\nWakers is a helper struct to store the task wakers\nWakes up all blocked tasks waiting on this condvar.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new CondVar\nWakes up one blocked task waiting on this condvar.\nBlocks the current task until this condition variable …\nCondWait is a wrapper struct for CondVar with a Mutex …\nSignal all waiting tasks.\nThe CondVar\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a new CondWait.\nReset the boolean flag value to false.\nSignal a waiting task.\nBoolean flag\nWaits for a signal or broadcast.\nThe return value from the <code>select</code> function, indicating …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the result of the future that completes first, …\nTaskGroup A group that contains spawned tasks.\nTaskHandler\nThe result of a spawned task.\nCancels all tasks in the group.\nCancels the task.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nChecks if the TaskGroup is empty.\nGet the number of the tasks in the group.\nCreates a new TaskGroup without providing an executor\nCreates a new task handler\nSpawns a new task and calls the callback after it has …\nCreates a new TaskGroup by providing an executor\nWaits for a future to complete or times out if it exceeds …\nkey cryptography type\nA Secret key\nAn extension trait, adding essential methods to all <code>KeyPair</code>…\nkey cryptography type\nAn extension trait, adding essential methods to all …\nA Secret key\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerate a new random keypair.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the public key of this keypair.\nGet the public key of this keypair.\nGet the secret key of this keypair.\nGet the secret key of this keypair.\nSign a message using the private key.\nSign a message using the private key.\nVerify a signature on a message with this public key.\nVerify a signature on a message with this public key.\nContains the error value\nContains the success value\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAn event within the <code>EventEmitter</code>.\nEventEmitter emits events to registered listeners based on …\nEventListener listens for and receives events from the …\nCancels the event listener and removes it from the …\nRemove all topics and event listeners\nThe time at which the event was created.\nEmits an event to the listeners.\nEmits an event to the listeners.\nReturns the event id for this event listener.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new <code>EventEmitter</code>\nCreates a new <code>EventListener</code>.\nCreates a new Event.\nReceives the next event.\nRegisters a new event listener for the given topic.\nRemoves the event listener attached to the given topic.\nReturns the topic for this event listener.\nUnregisters all event listeners for the given topic.\nThe value of the Event.\nCreates a new <code>EventEmitter</code> with the provided buffer size …\nA simple publish-subscribe system.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new <code>Publisher</code>\nCreates a new <code>Subscription</code>\nNotifies all subscribers\nReceive a message from the <code>Publisher</code>\nSubscribes and return a <code>Subscription</code>\nUnsubscribes by providing subscription id\nUnsubscribe from the <code>Publisher</code>\nCreates a new <code>Publisher</code> with the provided buffer size for …\nDecodes a given type <code>T</code> from the given slice. returns the …\nEncode the given type <code>T</code> into a <code>Vec&lt;u8&gt;</code>.\nEncode the given type <code>T</code> into the given slice..\nReturns the user’s home directory as a <code>PathBuf</code>.\nGenerates and returns a random u16 using <code>rand::rngs::OsRng</code>.\nGenerates and returns a random u32 using <code>rand::rngs::OsRng</code>.\nGenerates and returns a random u64 using <code>rand::rngs::OsRng</code>.\nExpands a tilde (~) in a path and returns the expanded …\nDecodes a given type <code>T</code> from the given slice. returns the …\nEncode the given type <code>T</code> into a <code>Vec&lt;u8&gt;</code>.\nEncode the given type <code>T</code> into the given slice..\nReturns the user’s home directory as a <code>PathBuf</code>.\nExpands a tilde (~) in a path and returns the expanded …")