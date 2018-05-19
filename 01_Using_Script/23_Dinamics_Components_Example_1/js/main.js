Vue.component('father_1', {
  props: [
    'select_child'
  ],
  template: `
    <div>
      <h1>I'm Father Component ONE</h1>
      <div>
        <child></child>
      </div>
    </div>
  `
});

Vue.component('father_2', {
  props: [
    'select_child'
  ],
  template: `
    <div>
      <h1>I'm Father Component TWO</h1>
      <div>
        <child></child>
      </div>
    </div>
  `
});

Vue.component('child', {
  template: `
    <p style="background:yellow">I'm a parraf in the child component</p>
  `
});

new Vue({
  el: '#components-demo',
  data: {
    selected:'father_1',
  }
});