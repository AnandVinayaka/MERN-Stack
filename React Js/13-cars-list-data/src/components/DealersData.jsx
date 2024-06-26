 export default function DealersData({children, onSelectDealer}) {
    return (
        <li>
            <button className="dealerBtn" onClick = {onSelectDealer}>{children}</button>
        </li>
    );
}