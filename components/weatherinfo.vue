<template>
    <div class="white--text text-center">
        <p class="text-h3 font-weight-regular">
            {{cityname}}
        </p>
        <p class="subtitle-1">
            {{getCurrentDate()}}
        </p>
        <h1 class="text-h1 font-weight-black">
            {{citytemp}}C<sup>o</sup>
        </h1>
        <p>
            - - - - - - - -
        </p>
        <p class="heading-3">{{citytempmin}}C<sup>o</sup>/{{citytempmax}}C<sup>o</sup></p>
        <v-row class="rounded-lg pt-6" no-gutters style="background-color:rgba(255,255,255,0.4)">
            <v-col cols="4">
                <p>{{citywd}}</p>
                <img :src="citywi|imglink" alt="">
            </v-col>
            <v-col cols="4">
                <p>wind {{citywind}}m/c</p>
                <img class="another-icon" src="~static/wind1.svg" alt="">
            </v-col>
            <v-col cols="4">
                <p>{{cityp}}hPa</p>
                <img class="another-icon" src="~static/pressure.svg" alt="">
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    props: ['cityname','citytemp','citytempmin','citytempmax','citywd','citywi','citywind','cityp'],
    filters: {
        imglink: function(citywi) {
            return `http://openweathermap.org/img/wn/${citywi}@2x.png`
        }
    },
    methods:{
        getCurrentDate(){
            const today = new Date();
            return today.toLocaleString('en', { month: 'long' ,weekday:'long',day:'2-digit',year:'numeric'})
        }
    } 
}
</script>
<style>
    .another-icon{
        max-width: 100px;
        padding: 20px;
    }
</style>