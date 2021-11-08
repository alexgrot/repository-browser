import React from 'react'
import renderer from 'react-test-renderer'
import GithubRepositoryListElement from '../components/github/GithubRepositoryList/GithubRepositoryListElement'

const mockedGithubRepository = {
  id: 97305807,
  node_id: 'MDEwOlJlcG9zaXRvcnk5NzMwNTgwNw==',
  name: 'KeepingAppAlive',
  full_name: 'jiangdongguo/KeepingAppAlive',
  private: false,
  owner: {
    login: 'jiangdongguo',
    id: 26385502,
    node_id: 'MDQ6VXNlcjI2Mzg1NTAy',
    avatar_url: 'https://avatars.githubusercontent.com/u/26385502?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/jiangdongguo',
    html_url: 'https://github.com/jiangdongguo',
    followers_url: 'https://api.github.com/users/jiangdongguo/followers',
    following_url: 'https://api.github.com/users/jiangdongguo/following{/other_user}',
    gists_url: 'https://api.github.com/users/jiangdongguo/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/jiangdongguo/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/jiangdongguo/subscriptions',
    organizations_url: 'https://api.github.com/users/jiangdongguo/orgs',
    repos_url: 'https://api.github.com/users/jiangdongguo/repos',
    events_url: 'https://api.github.com/users/jiangdongguo/events{/privacy}',
    received_events_url: 'https://api.github.com/users/jiangdongguo/received_events',
    type: 'User',
    site_admin: false,
  },
  html_url: 'https://github.com/jiangdongguo/KeepingAppAlive',
  description: 'Keeping app alive for Android 6.0+. // Android 6.0以上系统APP保活方法归纳',
  fork: false,
  url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive',
  forks_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/forks',
  keys_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/teams',
  hooks_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/hooks',
  issue_events_url:
    'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/issues/events{/number}',
  events_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/events',
  assignees_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/assignees{/user}',
  branches_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/branches{/branch}',
  tags_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/tags',
  blobs_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/languages',
  stargazers_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/stargazers',
  contributors_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/contributors',
  subscribers_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/subscribers',
  subscription_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/subscription',
  commits_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/contents/{+path}',
  compare_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/merges',
  archive_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/downloads',
  issues_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/issues{/number}',
  pulls_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/labels{/name}',
  releases_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/releases{/id}',
  deployments_url: 'https://api.github.com/repos/jiangdongguo/KeepingAppAlive/deployments',
  created_at: '2017-07-15T09:30:23Z',
  updated_at: '2021-09-02T12:57:57Z',
  pushed_at: '2017-07-15T09:33:57Z',
  git_url: 'git://github.com/jiangdongguo/KeepingAppAlive.git',
  ssh_url: 'git@github.com:jiangdongguo/KeepingAppAlive.git',
  clone_url: 'https://github.com/jiangdongguo/KeepingAppAlive.git',
  svn_url: 'https://github.com/jiangdongguo/KeepingAppAlive',
  homepage: 'http://blog.csdn.net/andrexpert/article/details/53485360 ',
  size: 1295,
  stargazers_count: 684,
  watchers_count: 684,
  language: 'Java',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 182,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 6,
  license: null,
  allow_forking: true,
  is_template: false,
  topics: [],
  visibility: 'public',
  forks: 182,
  open_issues: 6,
  watchers: 684,
  default_branch: 'master',
  score: 1,
}

it('renders homepage unchanged', () => {
  const tree = renderer
    .create(<GithubRepositoryListElement githubRepository={mockedGithubRepository} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
