import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { ErrorMessage } from './ErrorMessage'

export const allPostsQuery = gql`
	query allPosts($first: Int!, $skip: Int!) {
		allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
			id
			title
			votes
			url
			createdAt
		}
	}
`

const PostList: React.FunctionComponent = () => (
	<Query query={allPostsQuery} variables={{ skip: 0, first: 10 }}>
		{({ loading, error, data: { allPosts } }) => {
			if (error) return <ErrorMessage message="Error loading data." />
			if (loading) return <div>Loading...</div>

			return (
				<section>
					<ul>
						{allPosts.map((post: any, index: any) => (
							<li key={post.id}>
								<p>
									<span>{index + 1}. </span>
									{post.title}
								</p>
								<p>{post.url}</p>
							</li>
						))}
					</ul>
				</section>
			)
		}}
	</Query>
)

export { PostList }
