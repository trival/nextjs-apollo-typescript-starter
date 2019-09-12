import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import * as React from 'react'
import { PostOrderBy } from '../../generated/globalTypes'
import { ErrorMessage } from './ErrorMessage'

export const allPostsQuery = gql`
	query allPosts($first: Int!, $skip: Int!, $order: PostOrderBy) {
		allPosts(orderBy: $order, first: $first, skip: $skip) {
			id
			title
			votes
			url
			createdAt
		}
	}
`

const PostList: React.FunctionComponent = () => {
	const { loading, error, data } = useQuery(allPostsQuery, {
		variables: { skip: 0, first: 10, order: PostOrderBy.createdAt_DESC },
	})

	if (error) return <ErrorMessage message="Error loading data." />
	if (loading) return <div>Loading...</div>

	return (
		<section>
			<ul>
				{data.allPosts.map((post: any, index: any) => (
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
}

export { PostList }
