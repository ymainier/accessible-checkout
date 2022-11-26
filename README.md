# Reach UI

* From the creator of ReactRouter, Remix, ...
* Headless UI
* Not maintained since 

# Even for something simple

## Let's add a crossed-out price for promotion.

```
Given I have a have product with a promotion in my basket
When I'm on the checkout page
Then I should see the full price crossed-out
And there should be no accessibility issue
```

## First implementation

* Axe core is saying that everything is fine: done!
* Let's validate that with a screen reader...

## Second implementation

* A code snippet has been proposed by specialist
* It is strangely complex https://www.a11yproject.com/posts/how-to-hide-content/
* Edge cases are fascinating!
  * RTL,
  * Zero-height elements are not read by some screen readers,
  * Zero-width elements text are read as one big long word

## Use `<VisuallyHidden />` from `@radix-ui/`


[Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

[Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)

[Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)

[Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
