<template>
  <div class="container">
    <TopNavInfo
      dash-title="Jobs"
    />
    <JobsNavAdmin
      class="mt-5"
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
      <template #cell(title)="data">
        {{ data.item.jobId.title }}
      </template>
      <template #cell(duration)="data">
        {{ data.item.jobId.duration }}
      </template>
      <template #cell(experience)="data">
        {{ data.item.jobId.experience }}
      </template>
      <template #cell(amount)="data">
        NGN {{ data.item.jobId.amount }}
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
          class="btn btn-outline-primary float-right pl-2"
          @click="findById(row.item._id)"
        >
          <i class="far fa-eye" />
        </button>
      </template>
    </b-table>
    <div class="text-center mt-5">
      <b-pagination
        v-if="results.length"
        v-model="currentPage"
        pills
        :per-page="perPage"
        :total-rows="totalRow"
      />
      <h4
        v-if="!results.length"
      >
        No Applications yet
      </h4>
    </div>
    <FooterDash
      class="mt-5"
    />
  </div>
</template>

<script>
import JobsNavAdmin from '~/components/admin/jobs/JobsNavAdmin.vue'
import FooterDash from '~/components/dashboard/FooterDash.vue'
import TopNavInfo from '~/components/Navigation/dashboard/TopNavInfo.vue'
export default {
  name: 'Applicantions',
  layout: 'admin',
  components: { FooterDash, TopNavInfo, JobsNavAdmin },
  async asyncData ({ $axios }) {
    const { results } = await $axios.$get('application/get-applications')
    return { results }
  },
  data () {
    return {
      boxTwo: '',
      rows: 100,
      currentPage: 1,
      perPage: 10,
      fields: [
        { key: 'title', label: 'Job Title', sortable: true },
        { key: 'duration', label: 'Duration', sortable: true },
        { key: 'experience', label: 'Experience', sortable: true },
        { key: 'amount', label: 'Amount', sortable: true },
        { key: 'createdAt', label: 'Time of Application', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      filter: null
    }
  },
  computed: {
    totalRow () {
      const count = this.results.length
      return count
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
.float-right{
  float: right;
  margin-left: 10px;
}
.news-input {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 1px var(--bg-dark-blue);
  border: #FFFFFF;
  padding: 4px 33px;
}
.news-btn {
  background-color: var(--bg-dark-blue);
  padding: 5px 45px;
  color: #FFFFFF;
  box-shadow: 0px 0px 1px var(--bg-dark-blue);
  border: var(--bg-dark-blue);
  margin-left: -4px;
}
</style>
