# Lab 8 - Starter

## Question 1

> In your own words: Where would you fit your automated tests in your Recipe project development pipeline?
>
> 1. Within a Github action that runs whenever code is pushed
> 2. Manually run them locally before pushing code
> 3. Run them all after all development is completed

I would put automated tests within a GitHub action that runs whenever code is pushed.

Essentially we obviously don't want point number 3, because we want to test along the changes that we added so we can quickly notice the bug and fix it right away.

The first and second choice is whether we run it on the cloud or locally, it is better if we run them in the cloud so it doesn't make us have to wait all of the test to complete before pushing. In the cloud, we can just leave it while working with other things and come back later if there are some error.

In my opinion, the best of both world is by working with Pull Request so error code will not be shipped to the main branch, and can be fixed before merging the PR.

## Question 2

> Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No, we should use the unit test instead. E2E was supposed to emulate user actions from start to finish.

## Question 3

> Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, the feature is too big to be tested using unit test, we should use integration testing to do that. Unit testing is supposed to test individual components, but should not test how the components interact with each other.

This feature needs to be break down into different unit to be tested with unit test.

## Question 4

> Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, this is something that we can test with unit testing. By testing max message, it is only involving that specific function and we are debugging on a really small scale.

This test is also can be executed quickly and used as a utility that won't affect other non-related unit-tests.
