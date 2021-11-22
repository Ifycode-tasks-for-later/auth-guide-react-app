
/*------------------------------------------------------------------------------
* Both modal and form null - no modal popup wanted
* modal (string) and form (true) - Modal popup (with form, but no modal content)
* modal (string) and form (false) - Modal popup (with modal content, but no form)
-------------------------------------------------------------------------------*/

const links = {
  documentation: {
    name: 'Documentation',
    modal: null,
    form: null
  },
  tutorial: {
    name: 'Tutorial',
    modal: null,
    form: null
  },
  /*blog: {
    name: 'Blog posts',
    modal: null,
    form: null
  },*/
  account: {
    name: 'Account',
    modal: 'modal-account',
    form: false
  },
  logout: {
    name: 'Logout',
    modal: null,
    form: null
  },
  /*create: {
    name: 'Create post',
    modal: 'modal-create',
    form: true
  },*/
  login: {
    name: 'Login',
    modal: 'modal-login',
    form: true
  },
  signup: {
    name: 'Sign Up',
    modal: 'modal-signup',
    form: true
  },
  help: {
    name: 'Show Help',
    modal: 'modal-help',
    form: false
  }
}

export default links;
