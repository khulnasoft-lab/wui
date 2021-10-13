import React, { Fragment, useState, useRef, useEffect } from 'react';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiFocusTrap,
  EuiHeader,
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHorizontalRule,
  EuiIcon,
  EuiImage,
  EuiNavDrawer,
  EuiNavDrawerGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiShowFor,
  EuiTitle,
  EuiFormRow,
  EuiButtonToggle,
  EuiToolTip,
  EuiButtonIcon,
  EuiButtonEmpty,
} from '../../../../src/components';
import classNames from 'classnames';
import { DatePicker, MultiSelect, Searchbar } from './components';

export default () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [toggleAdvanced, setToggleAdvanced] = useState(false);
  const [isNavDrawerLocked, setIsNavDrawerLocked] = useState(false);

  const onToggleAdvancedChange = e => setToggleAdvanced(e.target.checked);

  useEffect(() => {
    document.body.classList.add('euiBody--headerIsFixed--triple');
  }, []);

  const faveExtraAction = {
    color: 'subdued',
    iconType: 'starEmpty',
    iconSize: 's',
    'aria-label': 'Add to favorites',
  };

  const pinExtraAction = {
    color: 'subdued',
    iconType: 'pin',
    iconSize: 's',
  };

  const pinExtraActionFn = val => {
    pinExtraAction['aria-label'] = `Pin ${val} to top`;
    return pinExtraAction;
  };

  const topLinks = [
    {
      label: 'Recently viewed',
      iconType: 'clock',
      flyoutMenu: {
        title: 'Recent items',
        listItems: [
          {
            label: 'My dashboard',
            href: '#/layout/nav-drawer',
            iconType: 'dashboardApp',
            extraAction: faveExtraAction,
          },
          {
            label: 'Workpad with title that wraps',
            href: '#/layout/nav-drawer',
            iconType: 'canvasApp',
            extraAction: faveExtraAction,
          },
          {
            label: 'My logs',
            href: '#/layout/nav-drawer',
            iconType: 'logsApp',
            'aria-label': 'This is an alternate aria-label',
            extraAction: faveExtraAction,
          },
        ],
      },
    },
    {
      label: 'Favorites',
      iconType: 'starEmpty',
      flyoutMenu: {
        title: 'Favorite items',
        listItems: [
          {
            label: 'My workpad',
            href: '#/layout/nav-drawer',
            iconType: 'canvasApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starFilled',
              iconSize: 's',
              'aria-label': 'Remove from favorites',
              alwaysShow: true,
            },
          },
          {
            label: 'My logs',
            href: '#/layout/nav-drawer',
            iconType: 'logsApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starFilled',
              iconSize: 's',
              'aria-label': 'Remove from favorites',
              alwaysShow: true,
            },
          },
        ],
      },
    },
  ];

  const adminLinks = [
    {
      label: 'Admin',
      iconType: 'managementApp',
      flyoutMenu: {
        title: 'Tools and settings',
        listItems: [
          {
            label: 'Dev tools',
            href: '#/layout/nav-drawer',
            iconType: 'devToolsApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add to Tools and Settings to favorites',
            },
          },
          {
            label: 'Stack Monitoring',
            href: '#/layout/nav-drawer',
            iconType: 'monitoringApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Stack Monitoring to favorites',
            },
          },
          {
            label: 'Stack Management',
            href: '#/layout/nav-drawer',
            iconType: 'managementApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Stack Management to favorites',
            },
          },
          {
            label: 'Nature Plugin (image as icon)',
            href: '#/layout/nav-drawer',
            extraAction: { ...pinExtraActionFn('Nature Plugin') },
            icon: (
              <EuiImage
                size="s"
                alt="Random nature image"
                url="https://source.unsplash.com/300x300/?Nature"
              />
            ),
          },
        ],
      },
    },
  ];

  const analyzeLinks = [
    {
      label: 'Analyze',
      iconType: 'logoBusinessAnalytics',
      flyoutMenu: {
        title: 'Analyze your data',
        listItems: [
          {
            label: 'Discover',
            href: '#/layout/nav-drawer',
            iconType: 'discoverApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Discover to favorites',
            },
          },
          {
            label: 'Visualize',
            href: '#/layout/nav-drawer',
            iconType: 'visualizeApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Visualize to favorites',
            },
          },
          {
            label: 'Canvas',
            href: '#/layout/nav-drawer',
            iconType: 'canvasApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Canvas to favorites',
            },
          },
          {
            label: 'Maps',
            href: '#/layout/nav-drawer',
            iconType: 'gisApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Maps to favorites',
            },
          },
          {
            label: 'Machine Learning',
            href: '#/layout/nav-drawer',
            iconType: 'machineLearningApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Machine Learning to favorites',
            },
          },
          {
            label: 'Graph',
            href: '#/layout/nav-drawer',
            iconType: 'graphApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Graph to favorites',
            },
          },
        ],
      },
    },
  ];

  const securityLinks = [
    {
      label: 'Security',
      iconType: 'logoSecurity',
      flyoutMenu: {
        title: 'Security',
        listItems: [
          {
            label: 'SIEM',
            href: '#/layout/nav-drawer',
            iconType: 'securityApp',
            extraAction: { ...pinExtraActionFn('SIEM') },
          },
          {
            label: 'Endpoints',
            href: '#/layout/nav-drawer',
            iconType: 'securityAnalyticsApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add SIEM to favorites',
            },
          },
        ],
      },
    },
  ];

  const searchLinks = [
    {
      label: 'Enterprise Search',
      iconType: 'logoAppSearch',
      flyoutMenu: {
        title: 'Enterprise search',
        listItems: [
          {
            label: 'Site search',
            href: '#/layout/nav-drawer',
            iconType: 'searchProfilerApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Enterprise search to favorites',
            },
          },
          {
            label: 'App search',
            href: '#/layout/nav-drawer',
            iconType: 'searchProfilerApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add App Search to favorites',
            },
          },
          {
            label: 'Workplace search',
            href: '#/layout/nav-drawer',
            iconType: 'searchProfilerApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Workplace Search to favorites',
            },
          },
        ],
      },
    },
  ];

  const observabilityLinks = [
    {
      label: 'Observability',
      iconType: 'logoMetrics',
      flyoutMenu: {
        title: 'Observe your operations',
        listItems: [
          {
            label: 'Logs',
            href: '#/layout/nav-drawer',
            iconType: 'logsApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Logs to favorites',
            },
          },
          {
            label: 'Metrics',
            href: '#/layout/nav-drawer',
            iconType: 'metricsApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Metrics to favorites',
            },
          },
          {
            label: 'APM',
            href: '#/layout/nav-drawer',
            iconType: 'apmApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add APM to favorites',
            },
          },
          {
            label: 'Uptime',
            href: '#/layout/nav-drawer',
            iconType: 'uptimeApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Uptime to favorites',
            },
          },
        ],
      },
    },
  ];

  const toggleFullScreen = () => setIsFullScreen(isFullScreen => !isFullScreen);

  const onNavDrawerLocked = isLocked => setIsNavDrawerLocked(isLocked);

  const renderLogo = () => (
    <EuiHeaderLogo
      iconType="logoKibana"
      href="#/layout/nav-drawer"
      aria-label="Goes to home"
    />
  );

  const renderMenuTrigger = () => (
    <EuiHeaderSectionItemButton
      aria-label="Open nav"
      onClick={() => navDrawerRef.current.toggleOpen()}>
      <EuiIcon type="apps" href="#" size="m" />
    </EuiHeaderSectionItemButton>
  );
  const renderBreadcrumbs = () => {
    const breadcrumbs = [
      {
        text: 'Management',
        href: '#',
        onClick: e => {
          e.preventDefault();
          console.log('You clicked management');
        },
        'data-test-subj': 'breadcrumbsAnimals',
        className: 'customClass',
      },
      {
        text: 'Agents',
        href: '#',
        onClick: e => {
          e.preventDefault();
        },
      },
      {
        text: 'Create',
      },
    ];

    return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />;
  };

  const navDrawerRef = useRef(null);

  let fullScreenDisplay;

  const headerClasses = classNames(
    { 'euiNavDrawer--expanded': isNavDrawerLocked },
    { 'euiHeader--collapsed': !toggleAdvanced }
  );

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
          <EuiHeader position="fixed">
            <EuiHeaderSection grow={false}>
              <EuiShowFor sizes={['xs', 's']}>
                <EuiHeaderSectionItem border="right">
                  {renderMenuTrigger()}
                </EuiHeaderSectionItem>
              </EuiShowFor>
              <EuiHeaderSectionItem border="right">
                {renderLogo()}
              </EuiHeaderSectionItem>
              <EuiHeaderSectionItem border="right">
                {renderBreadcrumbs()}
              </EuiHeaderSectionItem>
            </EuiHeaderSection>
            {/* Basic filters */}
            <EuiHeaderSection grow={false}>
              <EuiHeaderSectionItem>
                {!toggleAdvanced ? (
                  <EuiFlexGroup gutterSize="xs" justifyContent="spaceEvenly">
                    <EuiFlexItem grow={false}>
                      <EuiFormRow display="rowCompressed">
                        <MultiSelect />
                      </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiFormRow display="rowCompressed">
                        <MultiSelect />
                      </EuiFormRow>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                ) : (
                  <></>
                )}
              </EuiHeaderSectionItem>
            </EuiHeaderSection>
            <EuiHeaderSection grow={false}>
              <EuiHeaderSectionItem>
                {!toggleAdvanced ? (
                  <EuiFlexGroup gutterSize="l">
                    <EuiFlexItem grow={false}>
                      <EuiFormRow display="rowCompressed">
                        <DatePicker />
                      </EuiFormRow>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                ) : (
                  <></>
                )}
              </EuiHeaderSectionItem>
            </EuiHeaderSection>
            {/**** Notifications ****/}
            <EuiHeaderSection grow={false}>
              {/**** Advanced button ****/}
              <EuiHeaderSectionItem>
                <EuiFormRow display="rowCompressed">
                  <EuiToolTip content="Advanced search">
                    <EuiButtonToggle
                      iconType="controlsHorizontal"
                      label={'Advanced'}
                      fill={toggleAdvanced}
                      onChange={onToggleAdvancedChange}
                      isSelected={toggleAdvanced}
                      size={'s'}
                    />
                  </EuiToolTip>
                </EuiFormRow>
              </EuiHeaderSectionItem>
              <EuiHeaderSectionItem>
                <EuiHeaderSectionItemButton aria-label="Notifications">
                  <EuiToolTip content="Notifications">
                    <EuiIcon
                      color="primary"
                      size="s"
                      aria-label="Notifications"
                      type="bell"
                    />
                  </EuiToolTip>
                </EuiHeaderSectionItemButton>
              </EuiHeaderSectionItem>
            </EuiHeaderSection>
          </EuiHeader>
          {/**** Advanced Filtering Navbar ****/}
          <EuiHeader position="fixed" className={headerClasses}>
            <EuiHeaderSection grow>
              <EuiHeaderSectionItem grow>
                <Searchbar />
              </EuiHeaderSectionItem>
            </EuiHeaderSection>
          </EuiHeader>
          {/**** Selected Items Navbar ****/}
          <EuiHeader position="fixed" className={headerClasses}>
            <EuiHeaderSection grow={false}>
              <EuiHeaderSectionItem>
                <EuiToolTip content="Add filter">
                  <EuiButtonIcon
                    size="s"
                    aria-label="Add filter"
                    iconType="plusInCircle"
                  />
                </EuiToolTip>
                <EuiButtonEmpty>agent.name: Windows 3.11</EuiButtonEmpty>
                <EuiButtonIcon
                  size="s"
                  aria-label="Remove filter"
                  iconType="cross"
                />
                <EuiButtonEmpty>rule.level: 14</EuiButtonEmpty>
                <EuiButtonIcon
                  size="s"
                  aria-label="Remove filter"
                  iconType="cross"
                />
              </EuiHeaderSectionItem>
            </EuiHeaderSection>
          </EuiHeader>
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
