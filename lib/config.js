require('dotenv').config()

function getValidConfig(configEnv, keys) {
  const { config, missingKeys } = keys.reduce(
    (acc, key) => {
      if (!configEnv[key]) {
        acc.missingKeys.push(key)
      } else {
        acc.config[key] = configEnv[key]
      }
      return acc
    },
    { config: {}, missingKeys: [] }
  )

  if (missingKeys.length) {
    throw new Error(`Contentful key is missing : ${missingKeys.join(', ')}`)
  }
  return config
}

module.exports = {
  // getConfigForKeys(keys) {
  //   const configEnv = {
  //     CTF_CASESTUDY_POST_TYPE_ID: process.env.CTF_CASESTUDY_POST_TYPE_ID,
  //     CTF_SERVICELIST_POST_TYPE_ID: process.env.CTF_SERVICELIST_POST_TYPE_ID,
  //     CTF_FEATURES_POST_TYPE_ID: process.env.CTF_FEATURES_POST_TYPE_ID,
  //     CTF_TOPMESSAGE_POST_TYPE_ID: process.env.CTF_TOPMESSAGE_POST_TYPE_ID,
  //     CTF_INTRODUCTION_POST_TYPE_ID: process.env.CTF_INTRODUCTION_POST_TYPE_ID,
  //     CTF_SCENARIO_POST_TYPE_ID: process.env.CTF_SCENARIO_POST_TYPE_ID,
  //     CTF_INFORMATION_POST_TYPE_ID: process.env.CTF_INFORMATION_POST_TYPE_ID,
  //     CTF_TERMS_POST_TYPE_ID: process.env.CTF_TERMS_POST_TYPE_ID,
  //     CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  //     CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  //   }
  //   return getValidConfig(configEnv, keys)
  // },
  getConfigForBase(keys) {
    const configEnv = {
      BASE_NAME: process.env.BASE_NAME,
      BASE_DESCRIPTION: process.env.BASE_DESCRIPTION,
      BASE_URL: process.env.BASE_URL,
      BASE_OGP: process.env.BASE_OGP,
      BASE_DIR: process.env.BASE_DIR
    }
    return getValidConfig(configEnv, keys)
  }
}
