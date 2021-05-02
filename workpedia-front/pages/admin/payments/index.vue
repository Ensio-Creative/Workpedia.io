<template>
  <div class="container">
    <TopNavInfo
      dash-title="Payments"
      class="pb-5"
    />
    <div class="input-area my-3">
      <input
        v-model="filter"
        class="news-input"
        type="search"
        placeholder="Type to Search"
      >
      <button
        :disabled="!filter"
        class="news-btn"
        @click="filter = ''"
      >
        Clear
      </button>
    </div>
    <b-table
      :items="results"
      :fields="fields"
      :per-page="perPage"
      :filter="filter"
      :current-page="currentPage"
      sort-icon-left
      responsive="sm"
    >
      <template #cell(amount)="data">
        NGN {{ data.item.amount }}
      </template>
      <template #cell(createdAt)="data">
        {{ $moment(data.item.createdAt).fromNow() }}
      </template>

      <template #cell(actions)="row">
        <!-- <b-button size="sm" @click="findById(row.items._id)">
          Info modal
        </b-button> -->
        <button
          class="btn btn-outline-danger float-right"
          @click="showMsgBoxTwo(row.item._id)"
        >
          <i class="fas fa-times" />
        </button>
        <button
          class="btn btn-outline-success float-right mr-1"
          @click="showMsgBoxTwo(row.item._id)"
        >
          <i class="fas fa-undo-alt" />
        </button>
      </template>
    </b-table>
    <div class="text-center mt-5">
      <b-pagination
        v-if="results.length"
        v-model="currentPage"
        pills
        :per-page="perPage"
        :total-rows="results.length"
      />
      <h4
        v-if="!results.length"
      >
        No Applications yet
      </h4>
    </div>
    <FooterDash
      class="fixed-bottom"
    />
  </div>
</template>

<script>
export default {
  name: 'Users',
  layout: 'admin',
  async asyncData ({ $axios }) {
    const { results } = await $axios.$get('admin/all-payments')
    return { results }
  },
  data () {
    return {
      boxTwo: '',
      rows: 100,
      currentPage: 1,
      perPage: 3,
      fields: [
        { key: 'email', sortable: true },
        { key: 'amount', label: 'Amount', sortable: true },
        { key: 'reference', label: 'Reference', sortable: true },
        { key: 'purpose', sortable: true },
        { key: 'category', sortable: true },
        { key: 'response', sortable: true },
        { key: 'createdAt', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      filter: null
    }
  },
  methods: {
    findById (id) {
      this.$router.push(id)
    },
    showMsgBoxTwo (id) {
      this.$bvModal.msgBoxConfirm('Please confirm you want to delete this user!.', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then((value) => {
          if (value) {
            this.deleteApplication(id)
          }
          this.boxTwo = value
        })
        .catch((err) => {
          // An error occurred
          console.log(err)
        })
    },
    async deleteApplication (id) {
      const deletedApplication = await this.$axios.$delete(
        `application/delete-application/${id}`
      )
      if (!deletedApplication) {
        console.log('User not deleted')
      }
      const result = this.results.filter(user => user._id !== id)
      this.results = result
    }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
.news-input {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 1px rgba(37,30,140,0.25098);
  border: #FFFFFF;
  padding: 4px 33px;
}
.news-btn {
  background-color: rgba(37,30,140,0.25098);
  padding: 5px 45px;
  color: #FFFFFF;
  box-shadow: 0px 0px 1px rgba(37,30,140,0.25098);
  border: rgba(37,30,140,0.25098);
  margin-left: -4px;
}
.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
  justify-content: center;
  color: #0C0573 !important;
}
</style>
