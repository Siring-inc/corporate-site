import axios from 'axios'

export const state = () => ({
  newsItem: []
})

export const mutations = {
  setNews(state, data) {
    state.newsItem = data
  }
}

export const actions = {
  async get_news({ commit }) {
    await axios
      .get('https://siring.theblog.me/rss.xml', {
        timeout: 3000,
        responseType: 'document'
      })
      .then((response) => {
        const xml = response.data
        const channel = xml.getElementsByTagName('channel')
        const item = channel[0].getElementsByTagName('item')
        let newsEntries = []
        for (var j = 0; j < item.length; j++) {
          // console.log(item[j])
          // console.log(item[j].getElementsByTagName('title')[0].textContent)
          const newsItem = {
            //HTMLCollectionはattributesで指定必要あり
            title: item[j].getElementsByTagName('title')[0].textContent,
            link: item[j].getElementsByTagName('link')[0].textContent,
            pubDate: item[j].getElementsByTagName('pubDate')[0].textContent
          }
          newsEntries.push(newsItem)
        }
        commit('setNews', newsEntries)
      })
      .catch(function(error) {
        // console.log('error')
        // console.log(error)
      })
  }
}
