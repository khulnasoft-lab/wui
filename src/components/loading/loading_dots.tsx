/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Lottie from 'react-lottie';
import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { CommonProps } from '../common';
import { bigGrey, bigColor } from './animations';
import { EuiFlexGroup, EuiFlexItem } from '../flex';

export const EuiLoadingDots: FunctionComponent<CommonProps &
  HTMLAttributes<HTMLDivElement> & {
    /**
     * Makes the loader animation black and white
     */
    mono?: boolean;
  }> = ({ mono = false, className }) => {
  const classes = classNames(className);
  const options = {
    animationData: mono ? bigGrey : bigColor,
    loop: true,
    autoPlay: true,
  };
  return (
    <EuiFlexGroup
      direction="row"
      alignItems="center"
      justifyContent="flexStart"
      responsive={false}
      className={classes}>
      <EuiFlexItem grow={false}>
        <div className="euiLoadingDots__wrapper">
          <Lottie options={options} />
        </div>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
