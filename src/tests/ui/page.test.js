describe('page', () => {

  it('renders without crashing', () => {
    render()
  })

  it('renders the navbar', () => {
    let { $ } = render()
    expect($('.navbar')).toBePresent()
  })

  it('renders an indicator that there is no logged in user', () => {
    let { $ } = render()
    expect($('.navbar #hm-user-dropdown')).toIncludeText('Not logged in')
  })

  it('renders the name of the logged in user', () => {
    let { $ } = render.alice()
    expect($('.navbar #hm-user-dropdown')).toIncludeText('Alice')
  })

  it('renders the create dialogue link', () => {
    let { $ } = render()
    expect($('.navbar a[href="/create-dialogue"]')).toIncludeText('Start a Dialogue')
  })

})
