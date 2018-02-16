describe('page', () => {

  it('renders without crashing', async () => {
    await render()
  })

  it('renders the navbar', async () => {
    let { $ } = await render()
    expect($('.hm-page-header')).toBePresent()
  })

  it('renders an indicator that there is no logged in user', async () => {
    let { $ } = await render()
    expect($('.hm-page-header')).toIncludeText('Not logged in')
  })

  it('renders the name of the logged in user', async () => {
    let { $, store } = await render({ user: 'alice' })
    expect($('.hm-page-header .hm-user-name')).toIncludeText('Alice')
  })

  // it('renders the create dialogue link', () => {
  //   let { $ } = render()
  //   expect($('.navbar a[href="/create-dialogue"]')).toIncludeText('Start a Dialogue')
  // })
})
