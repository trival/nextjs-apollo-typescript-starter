import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import * as React from 'react'
import { PostOrderBy } from '../../generated/globalTypes'
import { ErrorMessage } from './ErrorMessage'
import { isQueryLoading } from './shared/Query'

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
	const result = useQuery(allPostsQuery, {
		variables: { skip: 0, first: 10, order: PostOrderBy.createdAt_DESC },
	})

	return (
		isQueryLoading(result) || (
			<section>
				<ul>
					{result.data.allPosts.map((post: any, index: any) => (
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
	)
}

export { PostList }
