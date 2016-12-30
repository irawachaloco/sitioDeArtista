(function(){
	'use strict';
	Vue.component('entry-list', {
	  props: [ 'state'],
	  //shortcut para v-bind es sólo ':' como abajo en el primer caso.
	  template: '<ul>\
	  <li v-for="entry in state.list"><entry-item :entry="entry" v-bind:state="state"></entry-item></li>\
	  </ul>'
	});
	Vue.component('entry-item',{
		props: ['entry', 'state'],
		template: '<a v-on:click="state.selected=entry" :class="cssClass"> {{ entry.title }} {{ cssClass}} </a>',
		computed: { 
			cssClass: function(){
				return (this.entry===this.state.selected)? 'selected' : ''
			}
		}
	});
	var app = new Vue ({
		el: '#entryList',
		data: {
			state: {
				list: window.state.entryList,
				selected:  window.state.entryList[0]
			}
		}
	})
	//console.log(window.state.entryList[0]);
}());