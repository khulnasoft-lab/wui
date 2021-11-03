import React, { Fragment, useState, useRef, useEffect } from 'react';
import {
  EuiButton,
  EuiFocusTrap,
  EuiHorizontalRule,
  EuiNavDrawer,
  EuiNavDrawerGroup,
} from '../../../../src/components';
import { Headers, MainBody } from './components';
import {
  observabilityLinks,
  searchLinks,
  securityLinks,
  analyzeLinks,
  adminLinks,
  topLinks,
} from './links';

export default () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isNavDrawerLocked, setIsNavDrawerLocked] = useState(false);

  useEffect(() => {
    document.body.classList.add('euiBody--headerIsFixed--triple');
  }, []);

  const toggleFullScreen = () => setIsFullScreen(isFullScreen => !isFullScreen);

  const onNavDrawerLocked = isLocked => setIsNavDrawerLocked(isLocked);

  const navDrawerRef = useRef(null);

  let fullScreenDisplay;

  if (isFullScreen) {
    fullScreenDisplay = (
      <EuiFocusTrap>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}>
          <Headers
            isNavDrawerLocked={isNavDrawerLocked}
            navDrawerRef={navDrawerRef}
          />
          {/**** Navigation Side Panel ****/}
          <EuiNavDrawer ref={navDrawerRef} onIsLockedUpdate={onNavDrawerLocked}>
            <EuiNavDrawerGroup listItems={topLinks} />
            <EuiHorizontalRule margin="none" />
            <EuiNavDrawerGroup listItems={analyzeLinks} />
            <EuiNavDrawerGroup listItems={securityLinks} />
            <EuiNavDrawerGroup listItems={searchLinks} />
            <EuiNavDrawerGroup listItems={observabilityLinks} />
            <EuiHorizontalRule margin="none" />
            <EuiNavDrawerGroup listItems={adminLinks} />
          </EuiNavDrawer>
          <MainBody toggleFullScreen={toggleFullScreen} />
        </div>
      </EuiFocusTrap>
    );
  }
  return (
    <Fragment>
      <EuiButton
        onClick={toggleFullScreen}
        iconType="fullScreen"
        aria-label="Show fullscreen demo">
        Show fullscreen demo
      </EuiButton>

      {/*
         If the below fullScreen code renders, it actually attaches to the body because of
         EuiOverlayMask's React portal usage.
       */}

      {fullScreenDisplay}
    </Fragment>
  );
};
