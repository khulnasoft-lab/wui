import React from 'react';
import { Link } from 'react-router-dom';

import { GuideRule, GuideRuleExample } from '../../components';

import {
  WuiText,
  WuiLink,
  WuiSpacer,
  WuiCode,
  WuiCallOut,
  WuiCodeBlock,
  WuiFlexGroup,
  WuiFlexItem,
  WuiTitle,
  WuiAspectRatio,
  WuiIcon,
} from '../../../../src/components';

const codeBlockProps = {
  language: 'html',
  paddingSize: 'none',
  fontSize: 'm',
};

export default {
  title: 'Accessibility guidelines',
  intro: (
    <>
      <WuiText className="guideSection__text" grow={false}>
        <p>
          WUI provides a strong start to building accessibility into your apps.
          The components provided strive to meet{' '}
          <WuiLink href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</WuiLink>{' '}
          guidelines on semantics, keyboard functionality, color contrast, and
          so on. How you stitch together these components in the overall page
          structure also plays a large role in meeting accessibility goals.
          Headings, landmarks, page titles, focus management, and accessible
          names all work together to create accessible apps.
        </p>
        <p>
          Building accessibility into your app is as important as code quality,
          visual design, and performance, and it’s also important that you test
          as you go. You can approach accessibility testing from three
          dimensions: automated, manual, and empathetic thinking. Use automated
          tests to quickly cover as much ground as possible, manual tests to
          address more complicated scenarios, and empathy to fill in the gaps.
        </p>
      </WuiText>

      <WuiSpacer size="xl" />
      <WuiTitle size="xs">
        <p>For a technical intro to accessibility and how WUI tackles it</p>
      </WuiTitle>

      <WuiSpacer size="l" />

      <WuiAspectRatio width={16} height={9} maxWidth={700}>
        <iframe
          title="Building and Testing for Accessibility with WUI"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/iDXoEe8NkrE"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </WuiAspectRatio>
      <WuiSpacer size="xl" />
    </>
  ),
  sections: [
    {
      title: 'Headings and landmarks',
      text: (
        <>
          <WuiText grow={false}>
            <p>
              You can aid navigation and make pages more accessible for screen
              reader users by using solid headings and landmarks.{' '}
              <strong>Headings</strong> are the simplest way for screen readers
              to navigate pages. A good heading hierarchy:
            </p>
            <ul aria-label="Attributes of a good heading hierarchy">
              <li>
                Uses only one <WuiCode language="html">{'<h1>'}</WuiCode> on
                each page
              </li>
              <li>
                Doesn&apos;t skip levels{' '}
                <WuiCode language="html">{'<h1> → <h6>'}</WuiCode>
              </li>
              <li>Doesn&apos;t duplicate content</li>
            </ul>
          </WuiText>

          <h3>Heading examples</h3>

          <GuideRule>
            <GuideRuleExample
              panel={false}
              frame="frame"
              type="do"
              text="Do. Descend through headings as you work your way through the document."
              panelStyles={{ justifyContent: 'flex-start' }}>
              <WuiCodeBlock {...codeBlockProps}>
                {`<WuiText>
  <h1>Discover your data</h1>
  <p>Some content</p>
  <h2>Drill into site metrics</h2>
  <h3>An important site metric</h3>
  <h3>Another important site metric</h3>
</WuiText>`}
              </WuiCodeBlock>
            </GuideRuleExample>

            <GuideRuleExample
              panel={false}
              frame="frame"
              type="dont"
              text="Don’t. This heading hierarchy is confusing. Also WuiText is not a good solution when you need to change heading presentation."
              panelStyles={{ justifyContent: 'flex-start' }}>
              <WuiCodeBlock {...codeBlockProps}>
                {`<WuiText>
  <WuiScreenReaderOnly>
    <h1>Discover your data</h1>
  </WuiScreenReaderOnly>
  <p>Some content</p>
  <h2>Discover your data</h2>
  <!-- Missing h3 header -->
  <h4 className="myLargeTitle">
    An important site metric
  </h4>
</WuiText>`}
              </WuiCodeBlock>
            </GuideRuleExample>
          </GuideRule>
          <GuideRule>
            <GuideRuleExample
              panel={false}
              frame="frame"
              type="do"
              text="Do. This is a good heading hierarchy. Though visible headings are certainly better, sometimes that is difficult to accommodate so hidden headings can give additional context."
              panelStyles={{ justifyContent: 'flex-start' }}>
              <WuiCodeBlock {...codeBlockProps}>
                {`<WuiTitle size="s"><h1>Discover your data</h1></WuiTitle>
<WuiScreenReaderOnly><h2>Drill into site metrics</h2></WuiScreenReaderOnly>
<WuiTitle size="l"><h3>An important site metric</h3></WuiTitle>
<WuiTitle size="m"><h3>Another important site metric</h3></WuiTitle>`}
              </WuiCodeBlock>
            </GuideRuleExample>
          </GuideRule>

          <WuiSpacer size="xxl" />

          <WuiText className="guideSection__text" grow={false}>
            <WuiCallOut
              iconType="bell"
              size="s"
              title={
                <span>
                  <Link to="/display/title">
                    <strong>WuiTitle</strong>
                  </Link>{' '}
                  gives you a way to separate your presentation from your
                  semantic markup.
                </span>
              }
            />

            <WuiSpacer />
            <p>
              <strong>Landmarks</strong> are another way for screen readers to
              navigate pages. A benefit of landmarks is that they offer more
              context on the type of content to expect than a heading. This is
              useful for tech that offers reader modes (e.g., Firefox, Safari,
              and apps like Pocket) and new form factors (e.g., smartwatches).
              Many landmarks are mapped to HTML elements, such as{' '}
              <WuiCode language="html">{'<main>'}</WuiCode>,{' '}
              <WuiCode language="html">{'<aside>'}</WuiCode>,{' '}
              <WuiCode language="html">{'<article>'}</WuiCode>; others are
              exposed through the <WuiCode>{'role'}</WuiCode> attribute.
            </p>
            <p>
              You can implement named landmarks with{' '}
              <WuiCode>aria-label</WuiCode> or{' '}
              <WuiCode>aria-labelledby</WuiCode>. However, having a heading
              inside of the landmark (even if it is visually hidden) and
              referenced by <WuiCode>aria-labelledby</WuiCode> is preferred.
            </p>
          </WuiText>

          <h3>Landmarks example</h3>

          <GuideRule>
            <GuideRuleExample
              panel={false}
              frame="frame"
              type="do"
              text="Do. Use HTML5 elements which convey semantic meaning about their purpose. Notice that all of the content is inside of semantic elements."
              panelStyles={{ justifyContent: 'flex-start' }}>
              <WuiCodeBlock {...codeBlockProps}>{`<body>
  <header className="appHeader">
    <!-- content -->
  </header>
  <main><!-- content --></main>
  <footer className="appFooter">
    <!-- content -->
  </footer>
</body>`}</WuiCodeBlock>
            </GuideRuleExample>
            <GuideRuleExample
              panel={false}
              frame="frame"
              type="dont"
              text="Don’t. Classes provide no semantic meaning and not all elements provide semantic meaning either."
              panelStyles={{ justifyContent: 'flex-start' }}>
              <WuiCodeBlock {...codeBlockProps}>{`<body>
  <div className="appHeader"></div>
  <discover-app></discover-app>
  <ul className="appFooter"></ul>
</body>`}</WuiCodeBlock>
            </GuideRuleExample>
          </GuideRule>
          {/* This spacer is hacks because GuideRuleExamples can't have multi-line captions */}
          <WuiSpacer size="xxl" />
          <h3>Headings and named landmarks example</h3>
          <GuideRule>
            <GuideRuleExample
              panel={false}
              frame="frame"
              type="do"
              text="Do. Use landmarks and headings together to build complex pages."
              panelStyles={{ justifyContent: 'flex-start' }}>
              <WuiCodeBlock
                {...codeBlockProps}>{`<header aria-labelledby="pageHeading">
  <h1 id="pageHeading">Discover your data</h1>
  <form role="search" aria-label="Site search"> <!-- input + label go in here --> </form>
<header>
<main aria-labelledby="contentHeading">
  <h2 id="contentHeading">Drill into site metrics</h2>
  <form role="search" aria-label="Search your data">
    <!-- input + label go in here -->
  </form>
</main>`}</WuiCodeBlock>
            </GuideRuleExample>
          </GuideRule>
          <WuiSpacer size="l" />
          <WuiText className="guideSection__text" size="s" grow={false}>
            <h3 id="further-reading">Further reading</h3>
            <ul aria-labelledby="landmarks-headings further-reading">
              <li>
                <WuiLink href="https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html">
                  W3C: Aria Landmarks
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://www.w3.org/WAI/tutorials/page-structure/">
                  W3C: Page Structure Concepts Tutorial
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#Good_semantics">
                  MDN: Good Semantics
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://www.upyoura11y.com/page-layout/">
                  Up Your A11y: Accessible Page Layouts
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://www.upyoura11y.com/reusable-components-with-headers/">
                  Up Your A11y: Heading Levels in Reusable Components
                </WuiLink>
              </li>
            </ul>
          </WuiText>
        </>
      ),
    },
    {
      title: 'Page titles',
      text: (
        <>
          <WuiText grow={false}>
            <p>
              Each page requires a unique, informative title that accurately
              reflects what the page does. The best page titles put the unique
              content first. Effectively, they&apos;re reverse-order
              breadcrumbs.
            </p>
          </WuiText>
          <WuiSpacer />
          <WuiFlexGroup gutterSize="s">
            <WuiFlexItem grow={false}>
              <WuiIcon type="checkInCircleFilled" size="l" color="secondary" />
            </WuiFlexItem>
            <WuiFlexItem grow={false}>
              <WuiTitle size="xs">
                <p>{'Use this format: '}</p>
              </WuiTitle>
            </WuiFlexItem>
            <WuiFlexItem grow={false}>
              <WuiCode>{'{Unique page title} - {Site title}'}</WuiCode>
            </WuiFlexItem>
          </WuiFlexGroup>
          <GuideRule>
            <GuideRuleExample
              panel={false}
              frame="frame"
              type="do"
              minHeight={200}
              text="Do. These are good example of page titles.">
              <div>
                <strong className="wui-textCenter wui-displayBlock">
                  Discover - Wazuh
                </strong>
                <WuiSpacer />
                <strong className="wui-textCenter wui-displayBlock">
                  Rollup Jobs - Management - Wazuh
                </strong>
              </div>
            </GuideRuleExample>
            <GuideRuleExample
              panel={false}
              frame="frame"
              type="dont"
              minHeight={200}
              text="Don’t. Though unique, this does not provide enough context; use: Watchers - Management - Wazuh.">
              <strong className="wui-textCenter wui-displayBlock">
                Watchers
              </strong>
            </GuideRuleExample>
          </GuideRule>
          <GuideRule>
            <GuideRuleExample
              panel={false}
              frame="frame"
              type="dont"
              minHeight={200}
              text="Don’t. Although it provides all the context, putting the most important bit at the end is hard to find; use: Spaces - Management - Wazuh.">
              <strong className="wui-textCenter wui-displayBlock">
                Wazuh - Spaces
              </strong>
            </GuideRuleExample>
            {/* This spacer is hacks because code blocks can't have multi-line captions */}
            <WuiSpacer size="xl" />
            <GuideRuleExample
              panel={false}
              frame="frame"
              type="dont"
              minHeight={200}
              text="Don’t. Although this provides all the context and in a good order, a title is not the place for any extra words; use: Reporting - Management - Wazuh.">
              <strong className="wui-textCenter wui-displayBlock">
                This is the Reporting page of the Management section of Wazuh.
              </strong>
            </GuideRuleExample>
          </GuideRule>
          <WuiSpacer size="xl" />
          <WuiSpacer size="xl" />

          <WuiText className="guideSection__text" size="s" grow={false}>
            <h3>Further reading</h3>
            <ul aria-labelledby="titles further-reading">
              <li>
                <WuiLink href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=242#page-titled">
                  WCAG 2.4.2 Page Titled - Level A
                </WuiLink>
              </li>
            </ul>
          </WuiText>
        </>
      ),
    },
    {
      title: 'Focus management',
      text: (
        <>
          <WuiText className="guideSection__text" grow={false}>
            <h3>Where is the focus state right now?</h3>
            <p>
              Focus states are an important part of design because they let
              keyboard users know where focus is currently at. All browsers ship
              with focus states for interactive elements, and most of the time
              you shouldn’t need to alter these. WUI goes further to customize
              focus states to match the Wazuh brand and provide better visual
              states, including color contrast.
            </p>
            <h3>Where is the focus state going?</h3>
            <p>
              Given that a keyboard user primarily navigates pages in one
              direction (either forward or backward), it’s important to have an
              intuitive focus order. Focus order should follow the flow of the
              page to make it easy to follow. If you’ve made a normally
              non-interactive element like a{' '}
              <WuiCode language="html">{'<div>'}</WuiCode> interactive via
              JavaScript, you can enable a tab stop using{' '}
              <WuiCode>tabIndex=0</WuiCode>. If you want something that is only
              focusable programmatically, you can use{' '}
              <WuiCode>tabIndex=-1</WuiCode>.
            </p>
            <WuiCallOut
              iconType="alert"
              title={
                <span>
                  Using <WuiCode>tabIndex</WuiCode> values greater than 0 is
                  problematic and should be avoided.
                </span>
              }
              color="danger"
              size="s"
              heading="p"
            />
            <h3>How do I get back to where I was?</h3>
            <p>
              Navigating complex sites sometimes means your focus state will
              jump around (e.g., skip links, modals, typeaheads, and so on). If
              you remove an element that currently has focus without setting
              focus anywhere else, users start over at the beginning of the
              page. Unless there’s a strong reason to do otherwise, focus state
              should always return to where it was previously if the currently
              focused element disappears. For example, closing a modal might
              mean your focus is on a close button; when the modal closes, you
              should return focus to the button that opened the modal.
            </p>
          </WuiText>
          <WuiSpacer />
          <WuiText size="s" grow={false}>
            <h3>Further reading</h3>
            <ul aria-labelledby="focus further-reading">
              <li>
                <WuiLink href="https://www.w3.org/WAI/perspective-videos/keyboard">
                  W3C: Keyboard Compatibility
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://reactjs.org/docs/accessibility.html#programmatically-managing-focus">
                  React docs: Programmatically managing focus
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets">
                  MDN: Keyboard-navigable JavaScript widgets
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://webaim.org/techniques/keyboard">
                  WebAIM: Keyboard Accessibility
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://www.upyoura11y.com/screen-reader-keyboard-navigation">
                  Up Your A11y: Getting Started with Keyboard Navigation and
                  Screen Readers
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://tink.uk/the-difference-between-keyboard-and-screen-reader-navigation/">
                  The difference between keyboard and screen reader navigation
                </WuiLink>
              </li>
            </ul>
          </WuiText>
        </>
      ),
    },
    {
      title: 'Naming',
      text: (
        <>
          <WuiText grow={false}>
            <p>
              An accessible name is the name of an HTML element as it’s exposed
              to assistive technology. An accessible name can then be read by a
              screen reader or can be targeted for an action.
            </p>

            <h3>Most elements</h3>
            <p>
              For most content, the accessible name comes from the element’s
              inner text, such as:{' '}
              <WuiCode language="html" size="s">
                {'<a href="https://wazuh.com">Wazuh.com</a>'}
              </WuiCode>
              . A screen reader can now read it out something like
              &ldquo;Wazuh.com, link&rdquo; or, using voice commands, it can be
              controlled with &ldquo;Click Wazuh.com link&rdquo;.
            </p>
            <h3>Images and other elements</h3>
            <p>
              Some content might require special attributes to give an element
              an accessible name. For images, you can use <WuiCode>alt</WuiCode>{' '}
              attributes, such as:
            </p>
            <WuiCodeBlock language="html" paddingSize="s" fontSize="m">
              {'<img src="image1.jpg" alt="An apple lays on a table">'}
            </WuiCodeBlock>
            <h3>Buttons without inner text</h3>
            <p>
              For buttons without descriptive text content, you can rely on ARIA
              to bring meaning back:
            </p>
            <WuiCodeBlock language="html" paddingSize="s" fontSize="m">
              {'<button aria-label="Close modal">Ｘ</button>'}
            </WuiCodeBlock>
            <h3>Forms and more complex patterns</h3>
            <p>
              Some HTML elements have associated elements that provide
              accessible names. Form elements are the most ubiquitous example: a
              checkbox doesn’t have a name by itself, but when it is associated
              with a label, assistive technologies can make the connection:
            </p>
            <WuiCodeBlock language="html" paddingSize="s" fontSize="m">
              {`<input type="checkbox" id="subscribe">
<label for="subscribe">Subscribe to Wazuh news</label>`}
            </WuiCodeBlock>
            <h3>Of note: Repeated calls to action</h3>
            <p>
              Having only an accessible name, however, doesn’t always lead to
              the best UX. Take a list of available fields that someone might
              want to add to their filter (say, on the discovery page of a
              popular open source project):
            </p>
            <WuiCodeBlock language="html" paddingSize="m" fontSize="m">
              {`<h3>Available fields</h3>
<ul>
  <li>
    @timestamp
    <button>add</button>
  </li>
  <li>
    _id
    <button>add</button>
  </li>
  <li>
    _index
    <button>add</button>
  </li>
</ul>`}
            </WuiCodeBlock>
            <p>
              Here, the 3 buttons have the same accessible name. There are a few
              different patterns you can use to differentiate between repeated
              items. For example, each button below shows a possible pattern you
              can use (in order of recommended best practice):
            </p>
            <WuiCodeBlock language="html" paddingSize="m" fontSize="m">
              {`<h3 id="available">Available fields</h3>
<ul aria-labelledby="available">
  <li>
    _id
    <button aria-label="add _id field to your current filter">
      add
    </button>
  </li>

  <!-- The next two options are hardest to make work with Elastic’s i18n framework -->

  <li>
    @timestamp
    <button>
      add
      <WuiScreenReaderOnly>
        @timestamp field to your current filter
      </WuiScreenReaderOnly>
    </button>
  </li>

  <li>
    <!-- This isn’t recommended but will work in a pinch -->
    <span id="filed3">_index</span>
    <button id="button3" aria-labelledby="button3 field3">add</button>
  </li>
</ul>
`}
            </WuiCodeBlock>
            <WuiCallOut
              iconType="bell"
              title="Give lists an accessible name to improve their discoverability!"
              heading="p">
              <WuiCodeBlock language="html" paddingSize="m" fontSize="s">
                {`<!-- Can be any heading level or even a paragraph -->
<h1 id="a1b2c3">My favorite fruit</h1>
<ul aria-labelledby="a1b2c3"><!-- ... --></ul>

<!-- You can still provide an accessible title even if there's no visual label -->
<ul aria-label="My favorite vegetables">...</ul>`}
              </WuiCodeBlock>
            </WuiCallOut>
            <WuiSpacer />
          </WuiText>
          <WuiSpacer />
          <WuiText size="s" grow={false}>
            <h3>Further reading</h3>
            <ul aria-labelledby="names further-reading">
              <li>
                <WuiLink href="https://www.w3.org/WAI/tutorials/forms/labels/">
                  W3c: Labeling Controls
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name">
                  The Paciello Group: What is an accessible name?
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://webaim.org/techniques/forms/controls">
                  WebAIM: Creating Accessible Forms
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://hacks.mozilla.org/2019/06/how-accessibility-trees-inform-assistive-tech">
                  Mozilla: How accessibility trees inform assistive tech
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://alistapart.com/article/semantics-to-screen-readers">
                  A List Apart: Semantics to Screen Readers
                </WuiLink>
              </li>
            </ul>
          </WuiText>
        </>
      ),
    },
    {
      title: 'Testing considerations',
      text: (
        <>
          <WuiText className="guideSection__text" grow={false}>
            <p>
              There are a lot of aspects to accessibility, and covering all the
              bases can be a lot to keep in mind. By relying on standards, you
              can minimize the amount of special casing you have to do in code,
              but you should still be cognizant of the many modalities in which
              users might use your products.
            </p>
            <h3>Low-vision</h3>
            <p>
              While low-vision users may use many assistive technologies in
              tandem, this section focuses on zooming. Two ways that users can
              zoom the page are by increasing the base font-size with browser
              tools or by using a 3rd-party magnifier (sometimes, a physical
              magnifier) to better see the screen.
            </p>
            <p>
              <WuiLink href="https://www.w3.org/WAI/WCAG21/quickref/#resize-text">
                WCAG 1.4.4
              </WuiLink>{' '}
              defines 200% browser zoom should continue to work with no further
              action from the user as a Level AA criteria.
            </p>
            <p>
              <WuiLink href="https://www.youtube.com/watch?v=QjKG4Tx9ER8&t=473s">
                ZoomText
              </WuiLink>{' '}
              is the most popular 3rd-party magnifier that gives users a window
              they can drag over content to magnify and read it out loud.
              Testing for the best experiences here is exceptionally difficult
              because you must make visual judgement calls. Specifically,
              related pieces of information should be close enough together for
              a low-vision user to efficiently interact with the UI.
            </p>
            <h3 id="screen-readers">Low-vision/blind (screen readers)</h3>
            <p>
              Blind and low-vision users often rely on tools, such as screen
              readers and braille readers, to navigate the web. Screen and
              braille readers read the page from top to bottom. Building a page
              with a good structure, will make it quick and easy to navigate.
              Braille readers are a textual representation of what a screen
              reader would say so we can focus on screen reader compatibility.
            </p>
            <p style={{ margin: '0' }}>
              The 3 most common, desktop, screen readers, and their most common
              browser pairings are:
            </p>
            <ul aria-label="Most common, desktop, screen reader/browser combinations">
              <li>JAWS with Chrome</li>
              <li>NVDA with Firefox</li>
              <li>VoiceOver with Safari</li>
            </ul>
            <p style={{ margin: '0' }}>Mobile is a little simpler:</p>
            <ul aria-label="Mobile screen reader/OS combinations">
              <li>VoiceOver for iOS</li>
              <li>TalkBack for Android</li>
            </ul>
            <ul aria-labelledby="screen-readers further-reading">
              <li>
                <WuiLink href="https://www.apple.com/voiceover/info/guide/_1124.html">
                  Apple docs: Learning VoiceOver Basics
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://webaim.org/articles/voiceover">
                  WebAIM: Using VoiceOver to Evaluate Web Accessibility
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://webaim.org/articles/nvda">
                  WebAIM: Using NVDA to Evaluate Web Accessibility
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://webaim.org/articles/jaws">
                  WebAIM: Using JAWS to Evaluate Web Accessibility
                </WuiLink>
              </li>
              <li>
                <WuiLink href="http://uncaughtreferenceerror.com/a-crash-course-to-screenreaders-for-sighted-developers">
                  An Intro To Screen Reader Testing for Sighted Developers
                </WuiLink>
              </li>
            </ul>
          </WuiText>
        </>
      ),
    },
    {
      title: 'Learning resources',
      text: (
        <>
          <WuiText className="guideSection__text" grow={false}>
            <ul>
              <li>
                A wide-reaching{' '}
                <WuiLink href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility">
                  guide on accessibility on MDN
                </WuiLink>{' '}
                covering basics and best practices for a variety of subjects
              </li>
              <li>
                The <WuiLink href="https://caniuse.com/">caniuse</WuiLink> of
                ARIA attributes:{' '}
                <WuiLink href="https://a11ysupport.io">
                  Accessibility support
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://developers.google.com/web/fundamentals/accessibility">
                  Accessibility web fundamentals by Google
                </WuiLink>
                , similar in content to the MDN guide, but more guided
              </li>
              <li>
                If you prefer videos to reading, a great &ldquo;pick your
                subject&rdquo; style series{' '}
                <WuiLink href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g">
                  A11ycasts
                </WuiLink>{' '}
                is available
              </li>
            </ul>
            <h3 id="examples">Practical examples</h3>
            <p>
              For many things, there’s no need to reinvent the wheel. If your
              component is featured in one of these two sources, feel free to
              borrow heavily!
            </p>
            <ul aria-labelledby="examples">
              <li>
                <WuiLink href="https://inclusive-components.design">
                  Inclusive Components
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://github.com/scottaohara/accessible_components">
                  Accessible Components
                </WuiLink>
              </li>
            </ul>
            <h3 id="tooling">Tooling</h3>
            <ul aria-labelledby="tooling">
              <li>
                Axe plugin for{' '}
                <WuiLink href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd">
                  Chrome
                </WuiLink>{' '}
                and{' '}
                <WuiLink href="https://addons.mozilla.org/en-US/firefox/addon/axe-devtools">
                  FF
                </WuiLink>
              </li>
            </ul>
            <h3 id="specs">Spec docs</h3>
            <ul aria-labelledby="specs">
              <li>
                <WuiLink href="https://www.w3.org/TR/using-aria">
                  Using ARIA
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://www.w3.org/TR/WCAG21">WCAG 2.1</WuiLink>
              </li>
              <li>
                <WuiLink href="https://www.w3.org/WAI/WCAG21/quickref">
                  How to Meet WCAG (Quick Reference)
                </WuiLink>
              </li>
              <li>
                <WuiLink href="https://www.w3.org/TR/wai-aria-1.1">
                  WAI ARIA 1.1
                </WuiLink>
              </li>
            </ul>
          </WuiText>
        </>
      ),
    },
  ],
};
