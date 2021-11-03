import React from 'react';
import {
  EuiButton,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
} from '../../../../../src/components';

export default ({ toggleFullScreen }) => (
  <EuiPage className="euiNavDrawerPage">
    <EuiPageBody className="euiNavDrawerPage__pageBody">
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Page title</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Content title</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiButton
            fill
            onClick={toggleFullScreen}
            iconType="exit"
            aria-label="Exit fullscreen demo">
            Exit fullscreen demo
          </EuiButton>
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
);
