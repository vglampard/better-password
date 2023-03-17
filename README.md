# BetterPassword => Work in progress!

## Are your passwords bad?

In spite of all messaging to the contrary, many MANY people are still using weak passwords, or identical/similar passwords across all platforms. 

I get it! It's a pain, and whilst password managers are excellent, they can also be a bit of hassle.

If you rely on them to remember all your passwords, YOU don't. Which can leave you out in the cold if you're trying to get into an account from a shared or public device. 

SO. I was looking into hashing, salting, and peppering, and thought - this seems like it could help solve some of our, ahem, password woes.


# THE APP
Better password helps you create complex passwords and keep track of them reliably. Without a password manager!

Put in a weak password (say, the name of the company you're signing up with) add a bit of personalised salt (say, your name) hit 'create password'. It'll spit you out a 22 character long version that contains upper and lower case letters, special characters, numbers, and all of it hashed using sha256. 

What's the use case? Well, it creates highly secure passwords, but all users need to remember is, in theory, two words! Firstly, the keyword you used for that account, and secondly, the salt - which you can keep the same across all passwords. Plug these two strings in, and it'll return you the same complex password every time. It's like having a personal password dictionary!

It loosely applies the ideas of salting, peppering, and hashing to ensure that if you put in the same simple keywords each time, you'll get the same complex password hash out the other end - with the added capital letters, special characters, and so forth that most good companies require for login. 

# NEXT STEPS
I'll be adding different hashing function options for users who want an added layer of obscurity. And I originally had peppering added using an env variable, but Netlify was having none of it initally - so that's on the way too. 
