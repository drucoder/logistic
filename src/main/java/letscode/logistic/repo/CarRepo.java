package letscode.logistic.repo;

import letscode.logistic.domain.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car, Long> {
    @Override
    @EntityGraph(attributePaths = {"model.mark"})
    Page<Car> findAll(Pageable pageable);
}
