# Starting from an accessible foundation

- Checking automatically with the axe-core chrome extension
- Using my laptop screen reader ([How to use Apple VoiceOver (12:10 min)](https://www.youtube.com/watch?v=5R-6WvAihms))
- Using my phone screen reader ([How to use Android TalkBack (11:01 min)](https://www.youtube.com/watch?v=0Zpzl4EKCco))

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

# WAI/ARIA APG to the rescue

- [Web Accessibility Initiative](https://www.w3.org/WAI/): Making the Web Accessible
- [Accessible Rich Internet Applications](https://www.w3.org/WAI/ARIA/): WAI Working Group
- [Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/): Design Pattern and Examples

Note:
- WAI: Initiative from W3C. Its goal is to provide strategies, standards, and supporting resources to help you make the Web more accessible to people with disabilities.
- ARIA mission: develop technologies that enhance the accessibility of web content for people with disabilities.

# Tooltip

- This design pattern is still a work in progress, see the [APG Tooltip page.](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- We can use the [RaduixUI Tooltip component.](https://www.radix-ui.com/docs/primitives/components/tooltip)
- Implementation is fine for computer screen readers, but not for mobile screen readers like TalkBack on Android.

# Tabs

- [APG Tabs page](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)
- We can use the [RaduixUI Tabs component.](https://www.radix-ui.com/docs/primitives/components/tooltip)

### Tests!

- Beware of the default activation mode, set it to manual with `activationMode="manual"`

# Disclosure

- [APG Disclosure page](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- We can use the [RaduixUI Collapsible component.](https://www.radix-ui.com/docs/primitives/components/collapsible)

# Accordion

- [APG Accordion page](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
