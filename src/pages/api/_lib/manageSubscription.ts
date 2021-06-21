import { fauna } from "../../../services/fauna";
import { query as q } from 'faunadb';

export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
){
    const userRef = await fauna.query(
        q.Select(
            "ref",
            q.Get(
                q.Match(
                    q.Index('user_by_stripe_customer_id'),
                    customerId
                )
            )
        )
    )
}