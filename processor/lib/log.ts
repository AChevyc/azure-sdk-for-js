// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import * as debugModule from "debug";
/**
 * @ignore
 * log statements for error
 */
export const error = debugModule("azure:eph:error");
/**
 * @ignore
 * log statements for lease
 */
export const lease = debugModule("azure:eph:lease");
/**
 * @ignore
 * log statements for azurebloblease
 */
export const azurebloblease = debugModule("azure:eph:azurebloblease");
/**
 * @ignore
 * log statements for leaseManager
 */
export const leaseManager = debugModule("azure:eph:leaseManager");
/**
 * @ignore
 * log statements for partitionManager
 */
export const partitionManager = debugModule("azure:eph:partitionManager");
/**
 * @ignore
 * log statements for host
 */
export const host = debugModule("azure:eph:host");
/**
 * @ignore
 * log statements for blobService
 */
export const blobService = debugModule("azure:eph:blobService");
/**
 * @ignore
 * log statements for partitionContext
 */
export const partitionContext = debugModule("azure:eph:partitionContext");
/**
 * @ignore
 * log statements for checkpointLeaseMgr
 */
export const checkpointLeaseMgr = debugModule("azure:eph:checkpointLeaseMgr");
/**
 * @ignore
 * log statements for checkpointLeaseMgr
 */
export const checkpoint = debugModule("azure:eph:checkpointInfo");
