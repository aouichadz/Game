new Vue({
	el:'#vue-app',
	data:{

	health1:100,
	health:100,
	ended:false,
	ended1:false,
	ended3:false,

	},

	methods:{
		
		punch1:function(){
			this.health1-=10;
			if(this.health1<=0){
				
				this.ended1=true;
				this.ended=true;
				
				
			};
		},

		punch:function(){
			this.health-=10;
			if (this.health<=0) {
				this.ended=true;
				this.ended3=true;
				

				};
			
		},

		restart:function(){
			this.health=100;
			this.health1=100;
			this.ended=false;
			this.ended1=false;
			this.ended3=false;
		}

     },

computed:{


		
		
		},
	
	

});