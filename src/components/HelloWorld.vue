<template>
  <div class="hello">
    <b-container>
      <b-row>
        <b-col cols="6" class="mt-2">
          <h4>Régions</h4>
          <hr>
          <b-form-input
              id="input-1"
              v-model="searchReg"
              type="text"
              placeholder="Recherche..."
          ></b-form-input>
          <hr>
          <div v-for="region in filteredListReg" :key='region.id'>
            <h5>{{region.label}}</h5>
          </div>
        </b-col>

        <b-col cols="6" class="mt-2">
          <h4>Départements</h4>
          <hr>
          <b-form-input
              id="input-2"
              v-model="searchDpt"
              type="text"
              placeholder="Recherche..."
          ></b-form-input>
          <hr>
          <div v-for="department in filteredListDpt" :key='department.id'>
            <h5>{{department.label}}</h5>
          </div>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
      return{
        searchReg: '',
        searchDpt: ''
      }
  },
  methods: {
    myEasyMethod: function(value) {
      let r = value.toLowerCase()
      r = r.replace(new RegExp(/[àáâãäå]/g),"a");
      r = r.replace(new RegExp(/æ/g),"ae");
      r = r.replace(new RegExp(/ç/g),"c");
      r = r.replace(new RegExp(/[èéêë]/g),"e");
      r = r.replace(new RegExp(/[ìíîï]/g),"i");
      r = r.replace(new RegExp(/ñ/g),"n");
      r = r.replace(new RegExp(/[òóôõö]/g),"o");
      r = r.replace(new RegExp(/œ/g),"oe");
      r = r.replace(new RegExp(/[ùúûü]/g),"u");
      r = r.replace(new RegExp(/[ýÿ]/g),"y");
      return r
    }
  },
  computed: {
    regions() {
      return this.$store.state.regions
    },
    departments() {
      return this.$store.state.departments
    },
    filteredListReg() {
      return this.regions.filter(region => {
        return region.logic.toLowerCase().includes(this.myEasyMethod(this.searchReg))
      })
    },
    filteredListDpt() {
      return this.departments.filter(department => {
        return department.logic.toLowerCase().includes(this.myEasyMethod(this.searchDpt))
      })
    },
  },
  mounted() {
    this.$store.dispatch("getRegions")
    this.$store.dispatch("getDepartments")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
