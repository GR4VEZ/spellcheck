#SpellCheck
    A straight forward CLI application written in vanilla js, leveraging hashing and recursion techniques to provide spelling correction suggestions.

#Setup Guide:

    * Install prompt via npm: https://github.com/flatiron/prompt
    ```
    [sudo] npm install prompt
    ```

    * Install Jasmine: https://jasmine.github.io/edge/node.html
    ```
    npm install -g jasmine
    ```

#Notes:

    * Unit tests can be run with Jasmine simply by typing `jasmine` in the root project directory once jasmine as been installed.

#Points of Improvement:

    * I was asked, 'if given more time what things would you have sought to improve.' I believe that the performance can be improved drastically via clever hashing techniques that allow for quick computation of input and comparison to similar 'order of N' accessible objects. There seems to be somewhat of a bottle neck in certain cases where there is a great deal of repetition in character strings. From an esthetic point of view I would also improve the CLI to be more robust and a bit cleaner of a Main. Finally, I feel as though the more functional the code is the better, at some point rewriting this to be more inline with declarative programming will drastically improve its scalability and testability.
