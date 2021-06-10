import styles from './styles.module.scss';

interface SubscribeBottonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeBottonProps) {
    return(
        <button type="button" className={styles.subscribeButton}>
            Subscribe now
        </button>
    )
}