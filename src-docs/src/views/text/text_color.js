import React from 'react';

import {
  WuiSpacer,
  WuiText,
  EuiTextColor,
  WuiTitle,
} from '../../../../src/components';

export default () => (
  <div>
    <WuiTitle>
      <h2>
        <EuiTextColor color="default">You </EuiTextColor>
        <EuiTextColor color="secondary">use </EuiTextColor>
        <EuiTextColor color="accent">it </EuiTextColor>
        <EuiTextColor color="warning">on </EuiTextColor>
        <EuiTextColor color="danger">anything!</EuiTextColor>
      </h2>
    </WuiTitle>

    <WuiSpacer size="l" />

    <WuiText>
      <p>
        <EuiTextColor color="default">Default text color</EuiTextColor>
      </p>
      <p>
        <EuiTextColor color="subdued">Subdued text color</EuiTextColor>
      </p>
      <p>
        <EuiTextColor color="secondary">Secondary text color</EuiTextColor>
      </p>
      <p>
        <EuiTextColor color="accent">Accent text color</EuiTextColor>
      </p>
      <p>
        <EuiTextColor color="warning">Warning text color</EuiTextColor>
      </p>
      <p>
        <EuiTextColor color="danger">Danger text color</EuiTextColor>
      </p>
      <p>
        <span style={{ background: '#222' }}>
          <EuiTextColor color="ghost">
            Ghost text color is always white regardless of theme.
          </EuiTextColor>
        </span>
      </p>
    </WuiText>

    <WuiSpacer />

    <WuiText color="danger">
      <h2>Works on WuiText as well.</h2>
      <p>
        Sometimes you need to color entire blocks of text, no matter what is in
        them. You can always apply color directly (versus using the separated
        component) to make it easy. Links should still{' '}
        <a href="#">properly color</a>.
      </p>
    </WuiText>
  </div>
);
