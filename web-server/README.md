# HYPERMEDIATOR Web Server

This is a simple wrapper around the main SPA which does server-side rendering.
It leverages the wonderful `redux-first-router` library to reuse not only the
UI, but also the store, actions, reducers, side-effect handlers & routing!
Initial store state is serialized into a string which is attached to the window
context and consumed by redux on the client side.

The way the main SPA is referenced is by including it in `package.json` as a
GitHub dependency. The production build is then done & served right out of
`node_modules`.

TODO: Caching!
