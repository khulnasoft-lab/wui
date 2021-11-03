import React, { useState } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiShowFor,
  EuiFormRow,
  EuiButtonToggle,
  EuiToolTip,
  EuiButtonIcon,
  EuiButtonEmpty,
} from '../../../../../src/components';
import classNames from 'classnames';
import DatePicker from './datepicker';
import MultiSelect from './multi_select';
import Searchbar from './searchbar';
import Notice from './notice';

export default ({ isNavDrawerLocked, navDrawerRef }) => {
  const [toggleAdvanced, setToggleAdvanced] = useState(false);

  const onToggleAdvancedChange = e => setToggleAdvanced(e.target.checked);

  const headerClasses = classNames(
    { 'euiNavDrawer--expanded': isNavDrawerLocked },
    { 'euiHeader--collapsed': !toggleAdvanced }
  );

  const renderLogo = () => (
    <EuiHeaderLogo
      iconType="logoWazuh"
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

  return (
    <>
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
                <Notice active={true} top={45} right={3}>
                  <EuiButtonToggle
                    iconType="controlsHorizontal"
                    label={'Advanced'}
                    aria-label={'Advanced'}
                    fill={toggleAdvanced}
                    onChange={onToggleAdvancedChange}
                    isSelected={toggleAdvanced}
                    size={'s'}
                  />
                </Notice>
              </EuiToolTip>
            </EuiFormRow>
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            <EuiFormRow display="rowCompressed">
              <EuiToolTip content="Notifications">
                <Notice active={true} top={20} right={21}>
                  <EuiButtonIcon
                    iconType="bell"
                    aria-label={'Notifications'}
                    label={'Notifications'}
                    color="primary"
                    size={'m'}
                    iconSize={'s'}
                  />
                </Notice>
              </EuiToolTip>
            </EuiFormRow>
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
    </>
  );
};
