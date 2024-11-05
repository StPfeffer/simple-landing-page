interface StarIconProps {
    color?: string;
    width?: number;
    height?: number
}

const StarOuterIcon: React.FC<StarIconProps> = ({
    color = "#EE6C4D",
    width = 20,
    height = 22
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M4.99772 12.1374L3.63104 18.0554C3.58872 18.2346 3.60143 18.4224 3.6675 18.5943C3.73357 18.7662 3.84993 18.9141 4.00139 19.0188C4.15285 19.1235 4.33237 19.1801 4.5165 19.1812C4.70062 19.1823 4.8808 19.1278 5.03349 19.0249L10.0278 15.6954L15.0222 19.0249C15.1784 19.1287 15.3627 19.1821 15.5502 19.178C15.7377 19.1739 15.9194 19.1124 16.0709 19.0019C16.2225 18.8915 16.3365 18.7372 16.3978 18.56C16.4591 18.3827 16.4646 18.191 16.4136 18.0105L14.736 12.1402L18.8966 8.39603C19.0298 8.27605 19.125 8.11963 19.1703 7.94614C19.2156 7.77264 19.209 7.58967 19.1515 7.41986C19.0939 7.25004 18.9878 7.10083 18.8463 6.99067C18.7048 6.88051 18.5342 6.81423 18.3554 6.80004L13.1263 6.38362L10.8634 1.3746C10.7913 1.21331 10.674 1.07635 10.5257 0.980249C10.3774 0.884145 10.2045 0.833008 10.0278 0.833008C9.85114 0.833008 9.67822 0.884145 9.52995 0.980249C9.38168 1.07635 9.26439 1.21331 9.19223 1.3746L6.92942 6.38362L1.70027 6.79913C1.52457 6.81305 1.35661 6.87729 1.21647 6.98416C1.07634 7.09104 0.969957 7.23602 0.910062 7.40178C0.850167 7.56753 0.839292 7.74703 0.87874 7.9188C0.918188 8.09057 1.00629 8.24734 1.1325 8.37035L4.99772 12.1374ZM7.61459 8.16947C7.77831 8.15658 7.93555 8.09987 8.06982 8.0053C8.20408 7.91073 8.31044 7.78179 8.37773 7.63198L10.0278 3.98047L11.6779 7.63198C11.7452 7.78179 11.8516 7.91073 11.9859 8.0053C12.1201 8.09987 12.2774 8.15658 12.4411 8.16947L16.0843 8.4584L13.0841 11.1587C12.8236 11.3936 12.7199 11.7549 12.8153 12.0925L13.9646 16.1146L10.5378 13.8297C10.3874 13.7288 10.2104 13.6749 10.0292 13.6749C9.84806 13.6749 9.67101 13.7288 9.5206 13.8297L5.93972 16.2173L6.90282 12.0475C6.93813 11.8942 6.93339 11.7343 6.88905 11.5833C6.84472 11.4323 6.76228 11.2953 6.64966 11.1853L3.8631 8.46849L7.61459 8.16947Z"
            fill={color} />
    </svg>
);

export default StarOuterIcon;
