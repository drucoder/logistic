package letscode.logistic.controller;

import letscode.logistic.domain.ComboListItem;
import letscode.logistic.dto.ListItemDto;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

public abstract class AbstractRestController<T extends ComboListItem, R extends JpaRepository<T, ?>> {
    protected R repo;

    public AbstractRestController(R repo) {
        this.repo = repo;
    }

    @GetMapping
    public Page<T> list(@PageableDefault Pageable pageable) {
        return repo.findAll(pageable);
    }

    @GetMapping("{id}")
    public T getOne(@PathVariable("id") T obj) {
        return obj;
    }

    @PostMapping
    public T add(@RequestBody T obj) {
        return repo.save(obj);
    }

    @PutMapping("{id}")
    public T update(@PathVariable("id") T dbObj, @RequestBody T obj) {
        BeanUtils.copyProperties(obj, dbObj, "id");

        return repo.save(dbObj);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") T dbObj) {
        repo.delete(dbObj);
    }

    @GetMapping("list")
    public List<ListItemDto> list() {
        return repo.findAll()
                .stream()
                .map(entity -> new ListItemDto(entity.getId(), entity.getName()))
                .collect(Collectors.toList());
    }
}
