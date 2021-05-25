import { Skeleton } from '../../skeleton/Skeleton';

export function PageSkeleton() {
  return (
    <div className="container">
      <div className="row">
        {[1, 2, 3 ,4 ,5 ,6].map((i) => (
          <div key={`page-skeleton-${i}`} className="col-md-4 mb-4">
            <Skeleton height="170px" />
          </div>
        ))}
      </div>
    </div>
  );
}
