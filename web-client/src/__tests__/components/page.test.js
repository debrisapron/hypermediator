describe('page', () => {

  it('renders without crashing', () => {
    render()
  })

  it('renders the navbar', () => {
    let { $ } = render()
    expect($.find('.navbar')).toBePresent()
  })

  it('renders an indicator that there is no logged in user', () => {
    let { $ } = render()
    expect($.find('.navbar')).toIncludeText('Not logged in')
  })
})
