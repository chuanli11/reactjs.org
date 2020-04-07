/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */


// $FlowExpectedError
import navDocs from '../../content/docs/nav.yml';

const sectionListDocs = navDocs.map((item: Object): Object => ({
  ...item,
  directory: 'docs',
}));


export {
  sectionListDocs,
};
