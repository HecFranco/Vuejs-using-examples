var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Firebase setup
var config = {
  apiKey: "AIzaSyCAOHyN1YOPG7b4iy6YvcDoxF-X9Xopkig",
  authDomain: "vuex-turnout-base.firebaseapp.com",
  databaseURL: "https://vuex-turnout-base.firebaseio.com",
  projectId: "vuex-turnout-base",
  storageBucket: "vuex-turnout-base.appspot.com",
  messagingSenderId: "1090400150599"
};

// var firebase = new Firebase("https://turnout-25be4.firebaseio.com");
var firebaseApp = firebase.initializeApp(config);
var eventsRef = firebaseApp.database().ref().child('events');

// Add Events
var AddingEvents = Vue.component('AddingEvents', {
  template: '#addingEvents',
  name: 'addingEvents',
  data: function data() {
    return {
      event: {
        title: '',
        description: '',
        date: '',
        location: '',
        email: ''
      },
      showForm: false
    };
  },

  methods: {
    addEvent: function addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event);
    }
  }
});
//Event Item Component
var EventItem = Vue.component('EventItem', {
  template: '#eventItem',
  name: 'eventItem',
  props: ['event']
});

//Dashboard component
var Dashboard = Vue.component('Dashboard', {
  template: '#dashboard',
  name: 'dashboard',
  methods: {
    signOut: function signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  },
  mounted: function mounted() {
    var _this = this;

    eventsRef.on('value', function (snap) {
      var events = [];
      snap.forEach(function (event) {
        events.push(event.val());
      });
      _this.$store.dispatch('setEvents', events);
    });
  }
});

//Signin component
var SignIn = Vue.component('SignIn', {
  template: '#signin',
  name: 'signin',
  data: function data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  },

  methods: {
    signIn: function signIn() {
      var _this2 = this;

      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password).catch(function (error) {
        _this2.error = error;
      });
    }
  }
});

//Signup component
var SignUp = Vue.component('SignUp', {
  template: '#signup',
  name: 'signup',
  data: function data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  },

  methods: {
    signUp: function signUp() {
      var _this3 = this;

      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function (error) {
        _this3.error = error;
      });
    }
  }
});

// VUEX Parts
Vue.use(Vuex);

// Mutation Types
/* const types = {SIGN_IN,SIGN_OUT,SET_EVENTS}
const SIGN_IN = 'SIGN_IN'
const SIGN_OUT = 'SIGN_OUT'
const SET_EVENTS = 'SET_EVENTS' */
var types = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  SET_EVENTS: 'SET_EVENTS'

  // Actions
  //const actions = {signIn,signOut,setEvents}
  /* const signIn = ({commit}, user_payload) => {
    commit(types.SIGN_IN, user_payload)
  } */

  /* const signOut = ({commit}) => {
    commit(types.SIGN_OUT)
  } */

  /* const setEvents = ({commit}, events_payload) => {
    commit(types.SET_EVENTS, events_payload)
  } */

};var store = new Vuex.Store({
  state: {
    user: {},
    events: []
  },
  mutations: (_mutations = {}, _defineProperty(_mutations, types.SIGN_IN, function (state, user_payload) {
    state.user = user_payload;
  }), _defineProperty(_mutations, types.SIGN_OUT, function (state) {
    state.user = {};
  }), _defineProperty(_mutations, types.SET_EVENTS, function (state, events_payload) {
    state.events = events_payload;
  }), _mutations),
  actions: {
    signIn: function signIn(_ref, user_payload) {
      var commit = _ref.commit;

      commit(types.SIGN_IN, user_payload);
    },
    signOut: function signOut(_ref2) {
      var commit = _ref2.commit;

      commit(types.SIGN_OUT);
    },
    setEvents: function setEvents(_ref3, events_payload) {
      var commit = _ref3.commit;

      commit(types.SET_EVENTS, events_payload);
    }
  }
  /* types: {
    SIGN_IN : 'SIGN_IN',
    SIGN_OUT : 'SIGN_OUT',
      SET_EVENTS : 'SET_EVENTS'
  } */
});

// Mutations
/* const mutations = {
  [types.SIGN_IN] (state, user_payload) {
    state.user = user_payload
  },

  [types.SIGN_OUT] (state) {
    state.user = {}
  },

  [types.SET_EVENTS] (state, events_payload) {
    state.events = events_payload
  }
} */

/* const state = {
  user: {},
  events: []
} */

/* const Dashboard = {
    template: '#dashboard'
} */
/* const SignIn = {
    template: '#signin'
} */
/* const SignUp = {
    template: '#signup'
} */

//Router part
Vue.use(VueRouter);

var router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/dashboard', component: Dashboard }, { path: '/signin', component: SignIn }, { path: '/signup', component: SignUp }]
});

firebaseApp.auth().onAuthStateChanged(function (user) {
  if (user) {
    store.dispatch('signIn', user);
    router.push('/dashboard');
  } else {
    router.replace('/signin');
  }
});

var App = {
  template: '#main-app'

  // Implement Vue initially
};new Vue({
  el: '#app',
  router: router,
  store: store,
  render: function render(h) {
    return h(App);
  }
});

//Main App
Vue.component('App', {
  template: '#main-app',
  name: 'app'
});