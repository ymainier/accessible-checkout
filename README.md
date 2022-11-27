# Reach UI

* From the creator of ReactRouter, Remix, ...
* Headless UI
* Not maintained since 

# Even for something simple

## Let's add a crossed-out price for promotion.

```gherkin
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

## Use `<VisuallyHidden />` from `@radix-ui/react-visually-hidden`

```tsx
<span className="price">
  <em aria-hidden>{previousPrice}</em>
  <strong aria-hidden>{price}</strong>
  <VisuallyHidden.Root>was {previousPrice}, now {price}</VisuallyHidden.Root>
</span>
```

# Tooltip

- This design pattern is still a work in progress, see the [APG Tooltip page.](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- We can use the [RaduixUI Tooltip component.](https://www.radix-ui.com/docs/primitives/components/tooltip)
- Implementation is fine for computer screen readers, but not for mobile screen readers like TalkBack on Android.

# Tabs

- [APG Tabs page](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)
- We can use the [RaduixUI Tabs component.](https://www.radix-ui.com/docs/primitives/components/tooltip)

### Tests!

- Beware of the default activation mode, set it to manual with `activationMode="manual"`

# Disclosure

- [APG Disclosure page](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- We can use the [RaduixUI Collapsible component.](https://www.radix-ui.com/docs/primitives/components/collapsible)

# Accordion

- [APG Accordion page](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
