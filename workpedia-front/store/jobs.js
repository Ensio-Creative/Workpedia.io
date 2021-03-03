export const state = () => ({
  job: [
    {
      _id: '1',
      title: 'Doctor',
      location: 'Lagos',
      dayOFPostMade: '4 days ago',
      timelineOfJobs: 'Part Time',
      experience: 'Min 5 years',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor',
      totalDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere accusamus aspernatur quam ea iste ut ullam? Quo laudantium assumenda, ducimus, sunt iure possimus, natus temporibus maiores qui quae eligendi repudiandae.',
      jobCategory: 'customer-service'
    },
    {
      _id: '2',
      title: 'Electrical Engineer',
      location: 'Port Harcourt',
      dayOFPostMade: 'A day ago',
      timelineOfJobs: 'Full Time',
      experience: 'Min 1 year',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor',
      totalDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere accusamus aspernatur quam ea iste ut ullam? Quo laudantium assumenda, ducimus, sunt iure possimus, natus temporibus maiores qui quae eligendi repudiandae.',
      jobCategory: 'customer-service'
    },
    {
      _id: '3',
      title: 'Fullstack developer',
      location: 'Port Harcourt',
      dayOFPostMade: 'A day ago',
      timelineOfJobs: 'Full Time',
      experience: 'Min 1 year',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor',
      totalDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere accusamus aspernatur quam ea iste ut ullam? Quo laudantium assumenda, ducimus, sunt iure possimus, natus temporibus maiores qui quae eligendi repudiandae.',
      jobCategory: 'web-dev'
    },
    {
      _id: '4',
      title: 'CopyWriter',
      location: 'Port Harcourt',
      dayOFPostMade: 'A day ago',
      timelineOfJobs: 'Full Time',
      experience: 'Min 1 year',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor',
      totalDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere accusamus aspernatur quam ea iste ut ullam? Quo laudantium assumenda, ducimus, sunt iure possimus, natus temporibus maiores qui quae eligendi repudiandae.',
      jobCategory: 'writing'
    },
    {
      _id: '5',
      title: 'Sales rep',
      location: 'Port Harcourt',
      dayOFPostMade: 'A day ago',
      timelineOfJobs: 'Full Time',
      experience: 'Min 1 year',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor',
      totalDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere accusamus aspernatur quam ea iste ut ullam? Quo laudantium assumenda, ducimus, sunt iure possimus, natus temporibus maiores qui quae eligendi repudiandae.',
      jobCategory: 'business'
    },
    {
      _id: '6',
      title: 'Ui/UX Designer',
      location: 'Port Harcourt',
      dayOFPostMade: 'A day ago',
      timelineOfJobs: 'Full Time',
      experience: 'Min 1 year',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor',
      totalDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere accusamus aspernatur quam ea iste ut ullam? Quo laudantium assumenda, ducimus, sunt iure possimus, natus temporibus maiores qui quae eligendi repudiandae.',
      jobCategory: 'design'
    },
    {
      _id: '7',
      title: 'Graphics designer',
      location: 'Port Harcourt',
      dayOFPostMade: 'A day ago',
      timelineOfJobs: 'Full Time',
      experience: 'Min 1 year',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor',
      totalDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere accusamus aspernatur quam ea iste ut ullam? Quo laudantium assumenda, ducimus, sunt iure possimus, natus temporibus maiores qui quae eligendi repudiandae.',
      jobCategory: 'design'
    }
  ]
})

export const getters = {
  category (state, categories) {
    return state.job.filter(job => job.jobCategory.includes(categories))
  }
}
