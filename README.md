#SpellCheck

A straight forward CLI application written in vanilla js, leveraging hashing and recursion techniques to provide spelling correction suggestions.

#Setup Guide:

    * Install prompt via npm: https://github.com/flatiron/prompt
    [sudo] npm install prompt

    * Install Jasmine: https://jasmine.github.io/edge/node.html
    npm install -g jasmine

#Notes

Unit tests can be run with Jasmine simply by typing `jasmine` in the root project directory once jasmine as been installed.

The app can be run with node simply by typing `node Main.js` in the root project directory.

#Points of Improvement

I was asked, 'If given more time what things would you have sought to improve.' I believe that the performance can be improved drastically via clever hashing techniques and quick computation. From an esthetic point of view I would also improve the CLI to be a bit more robust with a cleaner `Main`. At some point rewriting this to be more inline with declarative programming will drastically improve its scalability and testability.
