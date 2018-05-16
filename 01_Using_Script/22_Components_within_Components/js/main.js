Vue.component('father', {
  template: `
    <div>
      <h1>Father Component</h1>
      <div>
        <child>
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
});