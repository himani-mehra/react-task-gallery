import TodoApp from "./components/todo-app/TodoApp";
import TodoApiIntegration from "./components/todo-api-integration/TodoApiIntegration";
import ShoppingCartRedux from "./components/shopping-cart-redux/ShoppingCartRedux";
import AuthProtectedRoutes from "./components/auth-protected-routes/AuthProtectedRoutes";
import FormValidation from "./components/form-validation/FormValidation";
import TableSortingFiltering from "./components/table-sorting-filtering/TableSortingFiltering";
import SearchFilterComponent from "./components/search-filter-component/SearchFilterComponent";
import DebouncedSearchApi from "./components/debounced-search-api/DebouncedSearchApi";
import UseReducerComplexState from "./components/use-reducer-complex-state/UseReducerComplexState";
import UserProfileApi from "./components/user-profile-api/UserProfileApi";
import CustomHookDataFetch from "./components/custom-hook-data-fetch/CustomHookDataFetch";
import Pagination from "./components/pagination/Pagination";
import InfiniteScroll from "./components/infinite-scroll/InfiniteScroll";
import InfiniteScrollMemo from "./components/infinite-scroll-memo/InfiniteScrollMemo";
import ThemeToggle from "./components/theme-toggle/ThemeToggle";
import GlobalThemeContext from "./components/global-theme-context/GlobalThemeContext";
import TabsComponent from "./components/tabs-component/TabsComponent";
import ModalComponent from "./components/modal-component/ModalComponent";
import CustomDropdown from "./components/custom-dropdown/CustomDropdown";
import DragAndDropList from "./components/drag-and-drop-list/DragAndDropList";
import DragDropStatePersistence from "./components/drag-drop-state-persistence/DragDropStatePersistence";
import AccordionComponent from "./components/accordion-component/AccordionComponent";
import CollapsibleMenu from "./components/collapsible-menu/CollapsibleMenu";
import FileUploadProgress from "./components/file-upload-progress/FileUploadProgress";
import CountdownTimer from "./components/countdown-timer/CountdownTimer";
import OptimizedListVirtualization from "./components/optimized-list-virtualization/OptimizedListVirtualization";
import UseMemoHeavyComputation from "./components/use-memo-heavy-computation/UseMemoHeavyComputation";

export const taskRoutes = [
    { path: "todo-crud", element: <TodoApp /> },
    { path: "todo-api-integration", element: <TodoApiIntegration /> },
    { path: "auth-protected-routes", element: <AuthProtectedRoutes /> },
    { path: "theme-toggle", element: <ThemeToggle /> },
    { path: "shopping-cart-redux", element: <ShoppingCartRedux /> },
    { path: "form-validation", element: <FormValidation /> },
    { path: "user-profile-api", element: <UserProfileApi /> },
    { path: "custom-hook-data-fetch", element: <CustomHookDataFetch /> },
    { path: "table-sorting-filtering", element: <TableSortingFiltering /> },
    { path: "search-filter-component", element: <SearchFilterComponent /> },
    { path: "debounced-search-api", element: <DebouncedSearchApi /> },
    { path: "use-reducer-complex-state", element: <UseReducerComplexState /> },
    { path: "pagination", element: <Pagination /> },
    { path: "infinite-scroll", element: <InfiniteScroll /> },
    { path: "global-theme-context", element: <GlobalThemeContext /> },
    { path: "tabs-component", element: <TabsComponent /> },
    { path: "modal-component", element: <ModalComponent /> },
    { path: "custom-dropdown", element: <CustomDropdown /> },
    { path: "infinite-scroll-memo", element: <InfiniteScrollMemo /> },
    { path: "drag-and-drop-list", element: <DragAndDropList /> },
    { path: "drag-drop-state-persistence", element: <DragDropStatePersistence /> },
    { path: "accordion-component", element: <AccordionComponent /> },
    { path: "collapsible-menu", element: <CollapsibleMenu /> },
    { path: "file-upload-progress", element: <FileUploadProgress /> },
    { path: "countdown-timer", element: <CountdownTimer /> },
    { path: "optimized-list-virtualization", element: <OptimizedListVirtualization /> },
    { path: "use-memo-heavy-computation", element: <UseMemoHeavyComputation /> }
  ];
  

  export const tasks = [
    { path: "todo-crud", title: "To-Do App" },
    { path: "todo-api-integration", title: "Todo List with API" },
    { path: "form-validation", title: "Form with Validation" },
    { path: "theme-toggle", title: "Theme Toggle: useContext" },
    { path: "shopping-cart-redux", title: "Shopping Cart (Redux)" },
    { path: "user-profile-api", title: "User Profile Page with API Data & Shimmer effect" },
    { path: "custom-hook-data-fetch", title: "Custom Hook for Data Fetching" },
    { path: "search-filter-component", title: "Search & Filter with Debounce" },
    { path: "debounced-search-api", title: "Debounced Search (API Integration)" },
    { path: "table-sorting-filtering", title: "React Table with Sorting & Filtering" },
    { path: "use-reducer-complex-state", title: "Complex Local State Management" },
    { path: "pagination", title: "Pagination" },
    { path: "infinite-scroll", title: "Infinite Scroll" },
    { path: "global-theme-context", title: "Theme Management with Context" },
    { path: "tabs-component", title: "Tabs Component" },
    { path: "modal-component", title: "Modal" },
    { path: "custom-dropdown", title: "Custom Dropdown" },
    { path: "auth-protected-routes", title: "Authentication with Routes" },
    { path: "accordion-component", title: "Accordion Component" },
    { path: "collapsible-menu", title: "Collapsible Sidebar Menu" },
    { path: "file-upload-progress", title: "File Upload with Progress Bar" },
    { path: "countdown-timer", title: "Countdown Timer" },
    { path: "drag-and-drop-list", title: "Drag-and-Drop List" },
    { path: "drag-drop-state-persistence", title: "Drag and Drop with State Persistence" },
    { path: "infinite-scroll-memo", title: "Infinite Scroll with Memoization" },
    { path: "use-memo-heavy-computation", title: "Optimizing Expensive Calculations" },
    { path: "optimized-list-virtualization", title: "Optimized List Rendering" }
  ];